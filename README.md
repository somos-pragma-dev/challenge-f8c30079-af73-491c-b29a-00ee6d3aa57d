# Implementación de componentes standalone con signals y nuevo control flow syntax en Angular

La empresa de fintech necesita mejorar la modularidad y el rendimiento de su aplicación web construida con Angular. Para ello, se requiere implementar componentes standalone que utilicen signals y el nuevo control flow syntax. Los componentes deben ser reutilizables y eficientes, con una clara separación de responsabilidades. Los componentes interactuarán con un servicio de backend que proporciona datos de transacciones financieras.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Angular 21 con RxJS 7 |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Diseño de componentes standalone

**Objetivo:** Crear un componente standalone que muestre una lista de transacciones.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identificar las propiedades y eventos necesarios para el componente.
- Definir la estructura y el estilo del componente utilizando signals.
- Implementar el componente de manera que sea reutilizable y eficiente.

**Entregable:** Componente standalone que muestra una lista de transacciones.

<details>
<summary>Pistas de conocimiento</summary>

- Concepto de componentes standalone en Angular.
- Uso de signals para definir la estructura y el estilo del componente.

</details>

### Fase 2: Implementación del nuevo control flow syntax

**Objetivo:** Modificar el componente para utilizar el nuevo control flow syntax.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identificar las secciones del componente que se pueden optimizar utilizando el nuevo control flow syntax.
- Reemplazar las estructuras de control existentes con el nuevo control flow syntax.
- Verificar que el componente funcione correctamente después de la modificación.

**Entregable:** Componente modificado para utilizar el nuevo control flow syntax.

<details>
<summary>Pistas de conocimiento</summary>

- Concepto del nuevo control flow syntax en Angular.
- Ventajas del nuevo control flow syntax en términos de legibilidad y mantenimiento.

</details>

### Fase 3: Integración con servicio de backend

**Objetivo:** Conectar el componente con un servicio de backend que proporciona datos de transacciones financieras.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Definir la interfaz del servicio de backend.
- Implementar el servicio en el componente para obtener los datos de transacciones.
- Mostrar los datos de transacciones en el componente.
- Manejar posibles errores de conexión con el servicio de backend.

**Entregable:** Componente conectado con el servicio de backend y mostrando los datos de transacciones.

<details>
<summary>Pistas de conocimiento</summary>

- Concepto de servicios en Angular.
- Manejo de errores en la conexión con servicios externos.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los componentes standalone en Angular y cómo se diferencian de los componentes tradicionales?
- **paraQueSirve**: ¿Para qué sirve el nuevo control flow syntax en Angular y cuáles son sus ventajas?
- **comoSeUsa**: ¿Cómo se utiliza signals para definir la estructura y el estilo de un componente en Angular?
- **erroresComunes**: ¿Cuáles son los errores comunes al conectar un componente con un servicio de backend en Angular y cómo se pueden evitar?

## Criterios de Evaluacion

- Implementación correcta de un componente standalone.
- Uso adecuado de signals para definir la estructura y el estilo del componente.
- Implementación correcta del nuevo control flow syntax.
- Conexión exitosa con el servicio de backend y manejo de errores.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
