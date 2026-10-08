class ConfigurationManager {
  // 1. Atributo estático privado que guardará la única instancia
  private static instance: ConfigurationManager;

  // Dictionary/Objeto para guardar la configuración
  private config: Record<string, string> = {};

  // 2. Constructor PRIVADO: evita que se use 'new ConfigurationManager()' desde fuera
  private constructor() {
    this.config["appName"] = "MiSistemaEducativo";
    this.config["version"] = "1.0.0";
  }

  // 3. Método estático público para obtener la única instancia
  public static getInstance(): ConfigurationManager {
    if (!ConfigurationManager.instance) {
      ConfigurationManager.instance = new ConfigurationManager();
    }
    return ConfigurationManager.instance;
  }

  // Métodos de negocio
  public get(key: string): string {
    return this.config[key] || "No encontrado";
  }

  public set(key: string, value: string): void {
    this.config[key] = value;
  }
}

// ==============
// DEMOSTRACIÓN
// ==============

console.log("--- Inicio de la prueba Singleton ---");

// Intentamos obtener la instancia desde dos lugares distintos del programa
const configA = ConfigurationManager.getInstance();
const configB = ConfigurationManager.getInstance();

// 1. Comprobamos que ambas variables apuntan exactamente al mismo objeto en memoria
console.log("¿configA y configB son la misma instancia?:", configA === configB); // true

// 2. Modificamos un valor usando la referencia 'configA'
configA.set("theme", "dark");

// 3. Leemos el valor desde 'configB' para demostrar la centralización del estado
console.log("Valor de 'theme' leído desde configB:", configB.get("theme")); // "dark"