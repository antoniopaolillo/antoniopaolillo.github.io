import json
from io import StringIO


# código
def retrieve_pokemons_by_type(type, file):
    pokemons = json.load(file)["results"]
    pokemons_by_type = [
        pokemon for pokemon in pokemons if type in pokemon["type"]
    ]
    return pokemons_by_type


# teste
def test_retrieve_pokemons_by_type():
    grass_type_pokemon = {
        "national_number": "001",
        "evolution": None,
        "sprites": {
            "normal": "https:\/\/img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png",
            "large": "https:\/\/img.pokemondb.net/artwork/bulbasaur.jpg",
            "animated": "https:\/\/img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
        },
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp_atk": 65,
        "sp_def": 65,
        "speed": 45,
    }
    water_type_pokemon = {
        "national_number": "007",
        "evolution": None,
        "sprites": {
            "normal": "https:\/\/img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png",
            "large": "https:\/\/img.pokemondb.net/artwork/squirtle.jpg",
            "animated": "https:\/\/img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif",
        },
        "name": "Squirtle",
        "type": ["Water"],
        "total": 314,
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "sp_atk": 50,
        "sp_def": 64,
        "speed": 43,
    }
    fake_file = StringIO(
        json.dumps({"results": [grass_type_pokemon, water_type_pokemon]})
    )
    assert retrieve_pokemons_by_type("Grass", fake_file) == [
        grass_type_pokemon
    ]
