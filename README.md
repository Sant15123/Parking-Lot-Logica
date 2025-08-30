[Ver Video](https://screenapp.io/app/#/shared/P1XKugKF30)


# Sistema de Gestión de Parqueadero

Este proyecto implementa un sistema de gestión de parqueadero desarrollado en JavaScript utilizando programación orientada a objetos. El sistema permite administrar usuarios, vehículos, celdas de parqueo, accesos y el historial de operaciones.

## Arquitectura del Sistema

El sistema está compuesto por las siguientes clases principales:

### 🚗 **Vehiculo** (`Vehiculo.js`)
**Responsabilidad:** Representa los vehículos registrados en el sistema.

- **Propósito:** Almacena la información básica de cada vehículo que utiliza el parqueadero
- **Atributos principales:**
  - `id`: Identificador único del vehículo
  - `placa`: Número de placa del vehículo
  - `color`: Color del vehículo
  - `modelo`: Modelo del vehículo
  - `marca`: Marca del vehículo
  - `tipo`: Tipo de vehículo (carro, moto, etc.)
  - `usuario`: Usuario propietario del vehículo

### 👤 **Usuario** (`Usuario.js`)
**Responsabilidad:** Gestiona la información personal y de autenticación de los usuarios del sistema.

- **Propósito:** Representa a las personas que utilizan el sistema de parqueadero
- **Características:**
  - Información personal completa (nombres, apellidos, documento)
  - Datos de contacto (correo, celular)
  - Sistema de autenticación (clave)
  - Estados del usuario (activo/inactivo)
  - Foto de perfil
- **Funcionalidades:** Incluye getters y setters para todos los atributos

### 🔐 **Perfil_Usuario** (`Perfil_Usuario.js`)
**Responsabilidad:** Define los roles y permisos dentro del sistema.

- **Propósito:** Clasifica a los usuarios según su nivel de acceso
- **Tipos de perfil:**
  - **Administrador:** Acceso completo al sistema
  - **Operador:** Gestión operativa del parqueadero
  - **Visitante:** Acceso limitado
- **Funcionalidades:** Getters y setters para la gestión de perfiles

### 🏢 **Celda** (`Celda.js`)
**Responsabilidad:** Representa los espacios físicos de parqueo disponibles.

- **Propósito:** Gestiona la disponibilidad y ocupación de espacios de parqueo
- **Atributos principales:**
  - `codigo`: Identificador único de la celda
  - `tipoCelda`: Tipo de espacio (moto, carro)
  - `area`: Ubicación física (área, piso, nivel)
  - `estado`: Disponibilidad (ocupado/disponible)
  - `vehiculo`: Vehículo actualmente parqueado (si aplica)

### 🚪 **Acceso** (`Acceso.js`)
**Responsabilidad:** Registra todos los movimientos de entrada y salida del parqueadero.

- **Propósito:** Mantener un control detallado del flujo vehicular
- **Información registrada:**
  - Puerta utilizada
  - Vehículo involucrado
  - Fecha y hora exacta
  - Tipo de movimiento (entrada/salida)
- **Uso:** Esencial para auditorías y control de seguridad

### 📋 **HistorialParqueo** (`HistorialParqueo.js`)
**Responsabilidad:** Mantiene un registro histórico de las ocupaciones de celdas.

- **Propósito:** Tracking completo del uso de espacios de parqueo
- **Datos almacenados:**
  - Celda utilizada
  - Vehículo que la ocupó
  - Timestamp de la operación
- **Utilidad:** Reportes, análisis de ocupación y facturación

### ⚠️ **Incidencia** (`Incidencia.js`)
**Responsabilidad:** Catalogar diferentes tipos de eventos o problemas que pueden ocurrir.

- **Propósito:** Clasificación y seguimiento de situaciones especiales
- **Estructura:** Simple catálogo con ID y nombre descriptivo
- **Ejemplos de uso:**
  - Daños en vehículos
  - Problemas técnicos
  - Situaciones de seguridad

### 🚫 **Restriccion** (`Restriccion.js`)
**Responsabilidad:** Implementa las reglas de pico y placa u otras restricciones vehiculares.

- **Propósito:** Control automático de acceso según restricciones locales
- **Funcionalidad:**
  - Restricciones por día de la semana
  - Control por terminación de placa
  - Aplicación automática de políticas de acceso

## Control de Usuarios (`Control_Usuario.js`)
Este archivo contiene la inicialización de datos de ejemplo del sistema:

- **Perfiles predefinidos:** Administrador, Operador, Visitante
- **Usuarios de prueba:** Con diferentes perfiles y estados
- **Propósito:** Demostración del sistema y datos iniciales

## Flujo de Operación

1. **Registro:** Los usuarios se registran con su información personal y vehículos
2. **Ingreso:** Los vehículos ingresan por puertas controladas (registro en `Acceso`)
3. **Asignación:** Se asigna una celda apropiada según el tipo de vehículo
4. **Ocupación:** Se actualiza el estado de la celda y se registra en el historial
5. **Salida:** Se registra la salida y se libera la celda
6. **Restricciones:** El sistema verifica automáticamente las restricciones antes del acceso

## Características del Sistema

- ✅ **Orientado a Objetos:** Diseño modular y reutilizable
- ✅ **Control de Acceso:** Sistema de perfiles y permisos
- ✅ **Trazabilidad:** Registro completo de movimientos y ocupaciones
- ✅ **Gestión de Restricciones:** Implementación automática de pico y placa
- ✅ **Flexibilidad:** Soporte para diferentes tipos de vehículos y espacios
- ✅ **Escalabilidad:** Arquitectura preparada para crecimiento

## Tecnologías Utilizadas

- **JavaScript ES6+**: Clases, módulos ES6, import/export
- **Programación Orientada a Objetos**: Encapsulación, getters/setters
- **Arquitectura Modular**: Separación de responsabilidades por clase