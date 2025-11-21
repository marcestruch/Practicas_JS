# 01 - Fundamentos de JavaScript

Este módulo se centra en repasar y practicar los pilares fundamentales del lenguaje JavaScript (ES6+), incluyendo la manipulación de colecciones (`Arrays`) y la declaración y uso de funciones, prestando especial atención a los conceptos de inmutabilidad y ámbito.

---

## 💻 1.1. Arrays: Manipulación LIFO y FIFO

**Objetivo:** Comprender y aplicar los métodos de array que permiten utilizarlos como estructuras de datos de tipo Pila (LIFO) y Cola (FIFO).

| Estructura | Concepto | Métodos JS |
| :--- | :--- | :--- |
| **Pila** | **LIFO** (Last In, First Out) | `push()` (añadir al final) y `pop()` (eliminar del final). |
| **Cola** | **FIFO** (First In, First Out) | `push()` (añadir al final) y `shift()` (eliminar del inicio). |
| **Inicio** | Añadir al inicio | `unshift()` |

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

| Método | Propósito | ¿Modifica Original? | ¿Qué Devuelve? |
| :--- | :--- | :--- | :--- |
| **`forEach()`** | Iterar y ejecutar una acción por elemento. | No | `undefined` |
| **`map()`** | Transformar todos los elementos. | No | Nuevo Array (misma longitud) |
| **`filter()`** | Seleccionar un subconjunto de elementos. | No | Nuevo Array (longitud igual o menor) |
| **`reduce()`** | Reducir el array a un único valor (suma, promedio, etc.). | No | Valor Único |

### Archivo de la Actividad
- `02_Arrays_Iteracion.js`: Contiene las implementaciones de `forEach()`, `map()`, `filter()` y `reduce()`.

**Resultados Clave de la Actividad:**
- Se transformó el array de nombres a mayúsculas usando `map()`.
- Se filtraron los usuarios activos usando `filter()`, resultando en 2 objetos.
- Se calculó la suma total de las edades (87) usando `reduce()`.