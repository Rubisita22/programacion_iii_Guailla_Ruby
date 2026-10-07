# 💻 Programación III

Repositorio correspondiente a la materia **Programación III**.

En este repositorio se almacenarán prácticas, ejercicios, proyectos y trabajos desarrollados durante el curso, utilizando diferentes tecnologías orientadas al desarrollo web **Frontend** y **Backend**.

## 👨‍💻 Autor

*Nombre:* Rubyy

## 📚 Temas de la materia

Durante el curso trabajaremos con las siguientes tecnologías:

### 🌐 HTML

**HTML (HyperText Markup Language)** es el lenguaje utilizado para crear la **estructura de una página web**.

Permite definir elementos como:

* Títulos
* Párrafos
* Imágenes
* Enlaces
* Formularios
* Tablas
* Botones

Ejemplo:

```html
<h1>Hola Mundo</h1>
<p>Mi primera página web.</p>
```

---

### 🎨 CSS

**CSS (Cascading Style Sheets)** permite definir la **apariencia y diseño** de una página web.

Se utiliza para controlar:

* Colores
* Tamaños
* Fuentes
* Espaciado
* Posiciones
* Animaciones
* Diseño responsive

Ejemplo:

```css
h1 {
    color: blue;
    font-size: 32px;
}
```

---

### ⚡ JavaScript

**JavaScript** es un lenguaje de programación que permite agregar **interactividad y comportamiento** a las páginas web.

Permite trabajar con:

* Variables
* Funciones
* Condiciones
* Ciclos
* Eventos
* Objetos
* APIs
* Manipulación del DOM

Ejemplo:

```javascript
const nombre = "Estudiante";

console.log(`Hola ${nombre}`);
```

---

### 🔷 TypeScript

**TypeScript** es un lenguaje basado en JavaScript que agrega **tipado estático** y otras características que ayudan a desarrollar aplicaciones más grandes y mantenibles.

Entre sus características están:

* Tipos de datos
* Interfaces
* Clases
* Genéricos
* Enums
* Tipado de funciones

Ejemplo:

```typescript
let edad: number = 20;

function saludar(nombre: string): string {
    return `Hola ${nombre}`;
}
```

---

### 🟢 NestJS

**NestJS** es un framework de **Node.js y TypeScript** utilizado principalmente para desarrollar aplicaciones **Backend** y APIs.

Trabaja con una arquitectura modular y permite organizar una aplicación mediante:

* Módulos
* Controladores
* Servicios
* DTOs
* Guards
* Middleware
* APIs REST

Ejemplo básico:

```typescript
@Controller('usuarios')
export class UsuariosController {

    @Get()
    obtenerUsuarios() {
        return 'Lista de usuarios';
    }
}
```

---

### ⚛️ ReactJS

**ReactJS** es una biblioteca de JavaScript utilizada para crear **interfaces de usuario** dinámicas y reutilizables.

Su desarrollo se basa principalmente en:

* Componentes
* Props
* State
* Hooks
* Eventos
* Renderizado dinámico

Ejemplo:

```jsx
function Saludo() {
    return <h1>Hola Mundo</h1>;
}
```

---

## 🧩 Frontend y Backend

Durante la materia veremos tecnologías correspondientes a diferentes partes de una aplicación:

| Tecnología | Área               | Función             |
| ---------- | ------------------ | ------------------- |
| HTML       | Frontend           | Estructura          |
| CSS        | Frontend           | Diseño              |
| JavaScript | Frontend / Backend | Lógica              |
| TypeScript | Frontend / Backend | Programación tipada |
| ReactJS    | Frontend           | Interfaces          |
| NestJS     | Backend            | APIs y servidor     |

---

## 📁 Estructura del repositorio

El repositorio estará organizado por temas y proyectos:

```text
Programacion-III/
│
├── HTML/
│   ├── ejercicios/
│   └── proyectos/
│
├── CSS/
│   ├── ejercicios/
│   └── proyectos/
│
├── JavaScript/
│   ├── ejercicios/
│   └── proyectos/
│
├── TypeScript/
│   ├── ejercicios/
│   └── proyectos/
│
├── NestJS/
│   ├── ejercicios/
│   └── proyectos/
│
├── ReactJS/
│   ├── ejercicios/
│   └── proyectos/
│
└── README.md
```

---

## 🎯 Objetivo

El objetivo de este repositorio es **registrar y organizar el aprendizaje de Programación III**, aplicando progresivamente los conocimientos adquiridos para desarrollar aplicaciones web completas.

### 🚀 Tecnologías

```text
HTML
CSS
JavaScript
TypeScript
NestJS
ReactJS
```

---

## 👨‍💻 Autor

**Estudiante de Programación III**

Repositorio académico para prácticas, ejercicios y proyectos de la materia.
