import Usuario from "./Usuario.js";
import Perfil_Usuario from "./Perfil_Usuario.js";

const PerfilUsuario1 = new Perfil_Usuario(1, "Administrador");
const PerfilUsuario2 = new Perfil_Usuario(2, "Operador");
const PerfilUsuario3 = new Perfil_Usuario(3, "Visitante");

const Usuario1 = new Usuario(1, "CC", "Juan", "Carlos", "Pérez", "Ramírez", "juan.perez@example.com", "3001234567", "https://example.com/fotos/juan.jpg", "activo", "claveJuan123", PerfilUsuario1.id);
const Usuario2 = new Usuario(2, "TI", "María", "Camila", "Gómez", "Torres", "maria.camila@example.com", "3019876543", "https://example.com/fotos/maria.jpg", "inactivo", "claveMaria456", PerfilUsuario2.id);
const Usuario3 = new Usuario(3, "CE", "Andrés", "Felipe", "Suárez", "López", "andres.suarez@example.com", "3025556677", "https://example.com/fotos/andres.jpg", "activo", "claveAndres789", PerfilUsuario3.id);

console.log(PerfilUsuario1);