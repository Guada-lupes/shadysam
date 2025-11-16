export interface Personaje {
  id: string;              // Identificador único (ej: "personaje-001")
  nombre: string;          // Nombre del personaje (ej: "María González")
  avatar: string;          // Ruta a la imagen (ej: "/avatars/maria.png")
  dialogo: string[];       // Array de frases que dice (ej: ["Hola", "Ayuda"])
  opciones: OpcionDecision[];
}
export type TipoTurno = 'aprendizaje' | 'evaluacion';

// 3️⃣ OPCIÓN DE DECISIÓN
// Cada opción que el jugador puede elegir
export interface OpcionDecision {
  id: string;              // Identificador único
  texto: string;           // Texto que ve el jugador
  esCorrecta: boolean;     // true si es la respuesta correcta
  retroalimentacion: string;  // Mensaje después de elegir
  impactoGanancias: number;   // +100, -50, etc.
}
// 5️⃣ EMAIL
// El email que recibes al final del turno
export interface Email {
  asunto: string;
  remitente: string;
  cuerpo: string;
}

// 6️⃣ TURNO COMPLETO
// Toda la información de un turno del juego
export interface Turno {
  id: string;
  numero: number;              // 1, 2, 3...
  tipo: TipoTurno;            // 'aprendizaje' o 'evaluacion'
  clientes: EncuentroCliente[]; // Array de 1 o 2 clientes
  emailFinal: Email;
}
// 7️⃣ ESTADO DEL JUEGO
// Guarda todo el progreso del jugador
export interface EstadoJuego {
  jugadorId: string;
  turnoActual: number;        // En qué turno vas (1, 2, 3...)
  gananciasTotales: number;   // Dinero acumulado
  
  estadisticas: {
    decisiones_correctas: number;
    decisiones_incorrectas: number;
    clientes_atendidos: number;
  };
  
  turnosCompletados: string[]; // IDs de turnos ya jugados
}
export type FaseTurno = 
  | 'intro'              // Pantalla de inicio del turno
  | 'aprendizaje'        // Solo en turnos de aprendizaje
  | 'golpe_puerta'       // Animación de golpe en puerta
  | 'dialogo_cliente'    // Cliente hablando
  | 'decision'           // Mostrar opciones
  | 'revelar'            // Voltear opciones, mostrar correcta
  | 'email'              // Mostrar email
  | 'recompensa'         // Solo en turnos de evaluación
  | 'completado';        // Turno terminado

  