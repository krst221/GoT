# Game of Thrones

Proyecto grupal realizado en React sobre la serie Game of Thrones, atacando a una API con información sobre los personajes y casas.

## Contenido

### Home

Página principal donde se nos muestan las diferentes páginas del proyecto: Personajes, Casas y Cronología, junto a dos banderas para cambiar el idioma de la página (Los datos vienen en inglés desde la API, pero se puede cambiar el idioma de todas las cabeceras entre Inglés y Español).


### Personajes

Aquí se muestran todos los personajes de la serie ordenados por familias.
Al hacer hover sobre cada personaje se puede ver el nombre, y al hacer click en cada uno te lleva al detalle de personaje. Disponemos además de una barra de búsqueda para filtrar los personajes por nombre o apellido.

Se incluye también un botón Home (presente en todos los endpoints menos el Home mismo) además de las banderas para cambiar de idioma.


#### Detalle de personaje

En esta página nos encontramos con información adicional del personaje proporcionada con la API (no siempre son los mismos campos, si algún campo no contiene datos no se muestra), tales como las alianzas, episodios en los que aparece, títulos, familiares.. Si además el personaje dispone de casa, al hacer click en la imágen ésta nos lleva al detalle de la respectiva casa.

Se incluye el mismo header que en la página principal con los botones Home y de idioma, además de en éste caso de una flecha para volver a la página anterior.



### Casas

Parecida a la página de personajes, aquí se muestran todas las casas aunque el nombre ya se muesta por defecto. Debido a que la API está descontinuada, nos encontramos con dos conflictos con las imágenes:

- Directamente la casa no tiene imagen, en cuyo caso se añade el emblema de la casa Stark como place holder.
- La casa tiene imagen pero aparece como una imagen genérica, en cuyo caso simplemente se muesta centrada. Todas las imagenes 'corruptas' tienen una URL diferente, de manera que no se puede automatizar el reemplazarla por otra imagen como la de la casa Stark.

También se incluye una barra de búsqueda por nombre y los botones Home y cambio de idioma.

#### Detalle de casa

Página muy similar a la de detalle de personajes, en éste caso como campo adicional se incluye la fecha de fundación proporcionada por la API, convertida a formato DD/MM/YYYY.

### Cronología

Aquí se muestra una especie de árbol con todos los personajes ordenados por edad, mostrando su edad, el nombre y su imagen (el filtro por defecto es ascendiente, mostrándose primero el personaje más joven). Los personajes que no tienen la edad definida en la API o tienen u valor erróneo (hay un personaje que tiene 2016 años según la API) se han eliminado de la lista.

Arriba de todo aparece una flecha cuya dirección indica el sentido al que las edades aumentan, y un número con la edad del personaje mayor/más joven. Al hacer click en el número se invierte el sentido del árbol, la dirección de la flecha y el número que aparece arriba del todo, funcionando éste como toggle.

Al hacer click en la imagen de cada personaje nos lleva al respectivo detalle de personaje.


## Contrbuciones

@AlexProcessDev por ayudarme con el proyecto, y encargarse de las páginas de personajes y casas.
