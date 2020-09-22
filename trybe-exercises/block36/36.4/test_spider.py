from unittest.mock import patch

import requests

import spider

@patch("spider.requests.get")
def test_fetch_content_timeout_raised(mock_get):
    mock_get.side_effect = requests.ReadTimeout
    response = spider.fetch_content("http://meudominio.com")
    assert response == ''
