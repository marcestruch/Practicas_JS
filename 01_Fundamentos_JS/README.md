# 01 - Fundamentos de JavaScript

Este módulo se centra en repasar y practicar los pilares fundamentales del lenguaje JavaScript (ES6+), incluyendo la manipulación de colecciones (`Arrays`) y la declaración y uso de funciones, prestando especial atención a los conceptos de inmutabilidad y ámbito.

---

## 💻 1.1. Arrays: Manipulación LIFO y FIFO

**Objetivo:** Comprender y aplicar los métodos de array que permiten utilizarlos como estructuras de datos de tipo Pila (LIFO) y Cola (FIFO).

| Estructura | Concepto                       | Métodos JS                                                    |
| :--------- | :----------------------------- | :------------------------------------------------------------ |
| **Pila**   | **LIFO** (Last In, First Out)  | `push()` (añadir al final) y `pop()` (eliminar del final).    |
| **Cola**   | **FIFO** (First In, First Out) | `push()` (añadir al final) y `shift()` (eliminar del inicio). |
| **Inicio** | Añadir al inicio               | `unshift()`                                                   |

### Archivos de la Actividad

- `01_Arrays_LIFO_FIFO.js`: Contiene el script donde se realizaron las siguientes operaciones:

1.  Se añadió un elemento al final (`push()`).
2.  Se eliminó el último elemento (`pop()`).
3.  Se eliminó el primer elemento (`shift()`).
4.  Se añadió un elemento al inicio (`unshift()`).

---

**Resultado Clave de la Actividad:**

- Se comprobó que los métodos **`push()`, `pop()`, `shift()`** y **`unshift()`** son métodos que **modifican el array original**.

## 💻 1.2. Arrays: Iteración y Transformación (map, filter, reduce)

**Objetivo:** Practicar los métodos de iteración de arrays más comunes y funcionales en JavaScript (ES6+), entendiendo que estos métodos no modifican el array original (inmutabilidad).

| Método          | Propósito                                                 | ¿Modifica Original? | ¿Qué Devuelve?                       |
| :-------------- | :-------------------------------------------------------- | :------------------ | :----------------------------------- |
| **`forEach()`** | Iterar y ejecutar una acción por elemento.                | No                  | `undefined`                          |
| **`map()`**     | Transformar todos los elementos.                          | No                  | Nuevo Array (misma longitud)         |
| **`filter()`**  | Seleccionar un subconjunto de elementos.                  | No                  | Nuevo Array (longitud igual o menor) |
| **`reduce()`**  | Reducir el array a un único valor (suma, promedio, etc.). | No                  | Valor Único                          |

### Archivo de la Actividad

- `02_Arrays_Iteracion.js`: Contiene las implementaciones de `forEach()`, `map()`, `filter()` y `reduce()`.

**Resultados Clave de la Actividad:**

- Se transformó el array de nombres a mayúsculas usando `map()`.
- Se filtraron los usuarios activos usando `filter()`, resultando en 2 objetos.
- Se calculó la suma total de las edades (87) usando `reduce()`.

## 💻 1.3. Funciones: Ámbito (Scope), Parámetros y Elevación (Hoisting)

**Objetivo:** Practicar la sintaxis de funciones (declarativas y flecha), la definición de parámetros por defecto y, crucialmente, comprender los conceptos de **Ámbito (Scope)** y **Elevación (Hoisting)**, que dictan la accesibilidad y el orden de ejecución del código.

| Concepto                   | Descripción                                                                                                                                             | Palabras Clave Comunes                            |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------ |
| **Ámbito de Función**      | Define las variables accesibles dentro de una función. Las variables declaradas con `var` dentro de una función son locales y no visibles externamente. | `var` (ámbito de función), `global`, `local`      |
| **Parámetros por Defecto** | Asigna un valor predefinido a un parámetro si este se omite en la llamada a la función.                                                                 | `function`, `=>` (función flecha)                 |
| **Elevación**              | Comportamiento donde las declaraciones de funciones y variables son movidas lógicamente a la parte superior de su ámbito antes de la ejecución.         | `function` (declaración), `const/let` (expresión) |

### Archivo de la Actividad

- `03_Funciones_y_Scope.js`: Contiene las implementaciones para demostrar la accesibilidad de variables globales/locales, la sintaxis moderna de funciones con parámetros por defecto, y el comportamiento de elevación.

## 💻 1.4. Objetos: Destructuring y Spread Operator

**Objetivo:** Aprender a manipular objetos de forma moderna y concisa utilizando las características de ES6+.

| Concepto               | Descripción                                                                  | Sintaxis                                   |
| :--------------------- | :--------------------------------------------------------------------------- | :----------------------------------------- |
| **Destructuring**      | Extraer valores de objetos (o arrays) y asignarlos a variables individuales. | `const { prop } = objeto;`                 |
| **Spread Operator**    | Copiar propiedades de un objeto a otro o combinar objetos.                   | `const nuevo = { ...viejo, prop: valor };` |
| **Property Shorthand** | Sintaxis abreviada cuando la clave y la variable tienen el mismo nombre.     | `const obj = { nombre };`                  |

### Archivo de la Actividad

- `04_Objetos_Destructuring_Spread.js`: Ejemplos prácticos de extracción de datos anidados, combinación de objetos y simplificación de código.

## 💻 1.5. Clases y Herencia (POO en ES6)

**Objetivo:** Introducir la Programación Orientada a Objetos (POO) en JavaScript utilizando la sintaxis moderna de `class`.

| Concepto         | Descripción                                                                           | Palabras Clave                |
| :--------------- | :------------------------------------------------------------------------------------ | :---------------------------- |
| **Clase**        | Plantilla para crear objetos con propiedades y métodos.                               | `class`, `constructor`, `new` |
| **Herencia**     | Crear una clase hija que hereda propiedades y métodos de una clase padre.             | `extends`, `super()`          |
| **Polimorfismo** | Capacidad de sobrescribir métodos heredados para darles un comportamiento específico. | (Sobrescritura de métodos)    |

### Archivo de la Actividad

- `05_Clases_y_Herencia.js`: Implementación de una jerarquía de clases (`Animal` -> `Perro`) demostrando herencia, constructores y métodos.
