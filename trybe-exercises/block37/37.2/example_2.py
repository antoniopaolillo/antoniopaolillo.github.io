from abc import ABC, abstractmethod
from csv import DictWriter
from json import dump as json_dump
from zipfile import ZipFile


class SalesReport:
    def *_init_*(self, sales, serializer=None, compressor=None):
        """Nesta implementação recebemos o serializador e o compressor
        como atributos. Com essa composição, podemos utilizar qualquer
        tipo de serializador e de compressor, ambos compartilhando
        o código da geração do relatório.
        """
        self.sales = sales
        self.serializer = serializer
        self.compressor = compressor

    def build(self):
        # ...


    def serialize(self):
        self.serializer.serialize(self.build())


    def compress(self):
        self.compressor.compress(self.serializer.FILE_NAME)


class Serializer(ABC):
    @classmethod
    @abstractmethod
    def serialize(cls, data):
        raise NotImplementedError


class JSONSerializer(Serializer):
    FILE_NAME = 'sales_report.json'

    @classmethod
    def serialize(cls, data):
        with open(SalesReportJSON.FILE_NAME, 'w') as file:
            json_dump(data, file)


class CSVSerializer(Serializer):
    FILE_NAME = 'sales_report.csv'

    @classmethod
    def serialize(cls, data):
        with open(SalesReportCSV.FILE_NAME, 'w') as file:
            csv_writer = DictWriter(file, fieldnames=data[0].keys())
            csv_writer.writeheader()
            for item in data:
                csv_writer.writerow(item)


class ZipCompressor:
    @classmethod
    def compress(cls, file_name):
        cls.serialize()
        with ZipFile('sales_report.zip', 'w') as zip_file:
            zip_file.write(file_name)
