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