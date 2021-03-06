import os
import smtplib
import ssl


class User:
    def __init__(self, name, email, password):
        """ Método construtor da classe User.

        Responsável por inicializar os atributos da instância.
        Aqui, a instância é representada por self, que deve ser
        declarada explicitamente.
        O self é um padrão de nomenclatura equivalente ao this,
        que é muito utilizado em outras linguagens."""
        self.name = name
        self.email = email
        self.password = password


# ...

class Mailer:
    @classmethod
    def send_email(cls, from_email, from_password, to_email, subject, message):
        """Para criar métodos de classe em Python, precisamos de adicionar um
        @classmethod em sua assinatura.

        Observe também que em métodos de classe o parâmetro self é substituído
        pelo cls. Isto indica que receberemos uma classe e não uma instância,
        o que pode ser particularmente útil caso seja necessário acessar alguma
        informação da classe, como por exemplo, uma constante.
        """
        body = f"Subject:{subject}\n\n{message}"
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(from_email, from_password)
            try:
                server.sendmail(from_email, to_email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise EmailNotFoundError


class UserService:
    def *_init_*(self, user_instance, mailer_class):
        """Inicializa os atributos privados user e mailer com uma instância
        de usuário e uma classe de gerenciamento de emails.
        """
        self.__user = user_instance
        self.__mailer = mailer_class

    def reset_password(self):
        from_email = os.environ.get("SYSTEM_EMAIL", "app-dev@email.com")
        from_password = os.environ.get("SYSTEM_EMAIL_PASSWORD", "123456")
        to_email = self.__user.email
        subject = "Reset your password"
        message = "Instructions to reset your password"

        # No UserService alteramos apenas este trecho de código
        # Disparamos o envio do email diretamente através da classe do __mailer
        self.__mailer.send_email(
            from_email, from_password, to_email, subject, message
        )

# ...


class EmailNotFoundError(Exception):
    pass


# Código cliente (código que utiliza nossas classes)
user = User("name", "name@gmail.com", "?????")
service = UserService(user, Mailer)
"""Lembra quando dissemos que íamos explicar a diferença de mensagem e método?
Pois então, observe que, quando invocamos o método abaixo (reset_password), não
passamos o parâmetro self. Implicitamente o Python passa uma mensagem para a
instância, chamando o método já com o parâmetro self. Em outras palavras, podemos
dizer que a mensagem é uma camada acima do método que o encapsula"""
service.reset_password()
