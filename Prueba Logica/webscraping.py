import requests, json
from bs4 import BeautifulSoup as b

url = 'https://www.easports.com/fifa/ultimate-team/api/fut/item?page=1'

data = requests.get(url).json()
lista = []
#count = len(
for i in range(0,len(data["items"])):
    data_nombre = data["items"][i]["firstName"]+ " " +data["items"][i]["lastName"]
    data_posicion = data["items"][i]["position"]
    data_nacionalidad = data["items"][i]["nation"]["name"]
    data_equipo = data["items"][i]["club"]["name"]
    #print ("{\n" + '"name"'+ ":" + '"'+data_nombre+'",' "\n", '"position"' + ":" +'"'+data_posicion+'",' "\n", '"nation"' + ":" + '"'+data_nacionalidad+'",' "\n", '"team"' + ":" + '"'+data_equipo+'"' "\n" +"}," )
    jugador = {
        'name': data_nombre,
        'position': data_posicion,
        'nation': data_nacionalidad,
        'team': data_equipo
        }
    lista.append(jugador)

x = json.dumps({'jugadores':lista})
print (x)


