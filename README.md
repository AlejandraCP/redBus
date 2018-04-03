<span align="center">[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)</span>
<span align="center">[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)</span>

<p align="center">
  <a href="https://www.laboratoria.la/" rel="noopener" target="_blank"><img width="200" src="assets/l-amarilloblanco.png" alt="Laboratoria logo"></a></p>
</p>

<h1 align="center">stylelab</h1>

Presentamos la guía de estilos, la cual te ayudará con el desarrollo de los diferentes productos digitales propios de la marca Laboratoria, dónde podrás realizar piezas de manera rápida con todos los elementos del branding actual.

<div>

## Soporte de Stylelab

Stylelab es un proyecto de Laboratoria open source. Es un proyecto desarrollado como parte del Bootcamp 2017-II, un trabajo colaborativo entre desarrolladoras Front-End y UX Designers.

## Tabla de contenido

* [Instalación](#instalación)

### Documentación

* [Uso de componente](#uso-de-componente)
* [Componente Button](#componente-button)
* [Componente Typography](#componente-typography)
* [Componente Card](#componente-card)

## Instalación

stylelab está disponible en [npm package](https://www.npmjs.com/package/stylelab).

```sh
npm install stylelab
```

## Uso de componente

```jsx
import React from "react";
import { Button } from "stylelab";

function App() {
  return (
    <Button yellow bold>
      Hello World
    </Button>
  );
}

render(<App />, document.querySelector("#app"));
```

#### Importando varios componentes

```jsx
import { Button, Typography, Card } from 'stylelab';

}
```

## Componente Button

Opciones: Se modifica el estilo del botón agregando los siguientes atributos:  
 `Colores de fondo:` yellow, green o pink.  
 `Tamaño:` big, medium o small.  
 `Color de Fuente:` white.  
 \*El color negro de la fuente ya esta predetermiando.  
 `Grosor de fuente:` bold.

**Ejemplo**

<img width="150px" height='47px' src="assets/btn-small.png" alt="Boton pequeño">
<img width="240px" height='47px' src="assets/btn-medium.png" alt="Boton mediano">
<img width="280px" height='47px' src="assets/btn-large.png" alt="Boton large">


## Componente Typography

Demasiados estilos/tamaños de letras pueden arruinar cualquier diseño. Stylelab cuenta con una escala tipográfica, tiene un conjunto limitado de tamaños.

Opciones: Se modifica el estilo agregando los siguientes atributos:
**Atributos de tamaño**
`title1:` Título principal.  
 `title2:` Título secundario.  
 `title3:` Título terciario.  
 `phrase:` Usado en frases.
`body`
`body2`  
 **Atributo de colores**  
 `yellow, green o pink`  
 **Atributo para subrayado**  
 `under`  
 **Atributo grosor de fuente**  
 `bold`

**Ejemplo**

<img src="assets/typography.png" alt="tipografia">


## Componente Card

Opciones: Se modifica el estilo agregando los siguientes atributos:
**Atributos de tamaño**  
 `big`
`small`  
 **Atributo de fondo de color**  
 `yellow, green o pink`

