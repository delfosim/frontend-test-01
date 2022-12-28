# Não existe segregos.

## Para utilizar basta abrir o link do vercel(https://delfos-eight.vercel.app/) e utilizar como quiser.

## Importante:

## Desenvolvi uma API simples para este projeto e fiz o deploy com o (https://render.com) por tanto, a primeira requisição pode levar de 30 segundos a 1 minuto.
### Caso de algum erro desconhecido, se puder me notificar corrigirei imediatamente.
#
# API (https://delfos-api.onrender.com)

## Widget Routes

- POST- /create
    
    `/create`
    
    ```json
    {
    	"name":"widget",
    	"graphName":"graph 1",
    	"data":[100,500,450,600,800,900,900,900]
    }
    ```
    
     `SUCCESS - 201 Created`
    
    ```json
    {
    	"id": "a50ba1ba-e0fd-43da-8f45-05fe06d832ed",
    	"title": {
    		"text": "Widget"
    	},
    	"series": [
    		{
    			"data": [
    				100,
    				500,
    				450,
    				600,
    				800,
    				900,
    				900,
    				900
    			],
    			"name": "Graph 1"
    		}
    	]
    }
    ```
    
     `Same title and same graph name - 400 Bad Request`
    
    ```json
    {
    	"message": "This graph already exists"
    }
    ```
    
- GET- /
    
    `/ - 200 OK`
    
    ```json
    [
    	{
    		"id": "163463df-5b20-4252-a3a1-50ea1f63efea",
    		"title": {
    			"text": "Widget 1"
    		},
    		"series": [
    			{
    				"data": [
    					1,
    					2,
    					5,
    					3,
    					6,
    					5
    				],
    				"name": "Graph 1"
    			}
    		]
    	},
    	{
    		"id": "f68c5ac4-1d85-405f-80bf-8f79239a3082",
    		"title": {
    			"text": "Widget 2"
    		},
    		"series": [
    			{
    				"data": [
    					1,
    					2,
    					3,
    					9
    				],
    				"name": "Graph 1"
    			}
    		]
    	}
    ]
    ```
    
- DELETE- /delete
    
    `/delete/:id - 204 No Content` 
    
    ```json
    No body returned for response
    ```
    
     `Wrong id - 404 Not Found` 
    
    ```json
    {
    	"message": "Widget not found"
    }
    ```
    
     `/delete/ - 204 No Content` 
    
    It will delete all widgets
    
    ```json
    No body returned for response
    ```
    
- PATCH- /edit
    
    `/edit/:id` 
    
    ```json
    {
    	"name":"Editing", Optional
    	"graphName":"Graph 1", Needs to be an existent graph name to change the data
    	"data":[1,2,3,4,19,55] Optional, but requires graphName to be edited
    }
    ```
    
     `success - 200 OK` 
    
    ```json
    {
    		"id": "163463df-5b20-4252-a3a1-50ea1f63efea",
    		"title": {
    			"text": "Editing"
    		},
    		"series": [
    			{
    				"data": [
    					1,
    					2,
    					3,
    					4,
    					19,
    					55
    				],
    				"name": "Graph 1"
    			}
    		]
    	}
    ```
    
     `Wrong id - 404 Not Found` 
    
    ```json
    {
    	"message": "Widget not found"
    }
    ```