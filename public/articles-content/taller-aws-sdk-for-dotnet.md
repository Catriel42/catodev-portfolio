# Taller: C#/.NET + AWS SDK for .NET

Bienvenido al taller! Vamos a comenzar con la instalacion de lo que necesitas para lograrlo

## Part 1: Instalaciones

### 1. Instalando SDK .NET

Esto dependerá de tu sistema operativo:

> [!NOTE]
> Procura instalar la version 10, es la latest y es buena practica usar las version latest :).

#### Windows

Usa el instalador oficial

<https://dotnet.microsoft.com/es-es/download/dotnet/10.0>

![Windows view](/taller-aws-images/image.png)

#### Ubuntu

Dependiendo a tu versión, podrás instalarlo siguiendo la guía:

<https://learn.microsoft.com/en-us/dotnet/core/install/linux-ubuntu-install?tabs=dotnet10&pivots=os-linux-ubuntu-2604>

![Ubuntu view](/taller-aws-images/image2.png)

#### Arch (I use arch, btw)

El buen pacman, nunca falla

``` bash
sudo pacman -S dotnet-sdk-10.0
```

> [!TIP]
> Revisar la instalación con 'dotnet --version'.

### 2. Instalando aws-cli

#### Windows

Usar el script oficial:

<https://docs.aws.amazon.com/es_es/cli/latest/userguide/getting-started-install.html>

![Windows view](/taller-aws-images/image3.png)

#### Ubuntu

Usar el script oficial:

<https://docs.aws.amazon.com/es_es/cli/latest/userguide/getting-started-install.html>

#### Arch

Amigo, arreglatelas.

Broma, usa:

``` bash
sudo pacman -S aws-cli-v2
```

> [!TIP]
> Comprobar la instalacion con 'aws --version'

### 3. Creando nuestra primera solucion

Crearemos una solucion en dotnet:

``` bash
dotnet new sln --name AwsPractice -o AwsPractice
```

Crearemos dos projects en la solucion, uno console y otro webapp:

``` bash
#Entramos a la carpeta solution
cd AwsPractice/
# Console
dotnet new console -n AwsPractice.Console -o AwsPractice.Console
# WebApp
dotnet new web -n AwsPractice.AgentCore -o AwsPractice.AgentCore
```

Los agregamos al solution:

``` bash
dotnet sln add AwsPractice.Console/AwsPractice.Console.csproj
dotnet sln add AwsPractice.AgentCore/AwsPractice.AgentCore.csproj
```

Listo!

## Part 2: Basic .NET

### 1. Hello, world

Cuando creamos console project, vino generado con un Hello, World.
Lo ejecutaremos

``` bash
dotnet run --project AwsPractice.Console
```

Mira tu hello world!

### 2. Conceptos Básicos: Object-Oriented Programming (OOP)

Antes de conectar nuestro código con AWS, necesitamos entender cómo organizar la información en C#. C# es un lenguaje **Orientado a Objetos (OOP)**.

Imagina que estás construyendo un videojuego. En lugar de tener variables sueltas por todo lado, agrupas la información en "moldes" llamados **Clases** (Classes) y luego creas "copias" de esos moldes llamadas **Objetos** (Objects).

#### Clases

Una clase es como el plano de una casa. Define qué características (Propiedades) y qué acciones (Métodos) tendrá.

Veamos un ejemplo simple. Reemplaza el contenido de `Program.cs` en tu proyecto de Consola con esto:

```csharp
// 1. Definimos nuestro "molde" (Clase)
public class Robot
{
    // Propiedades (Características)
    public string Nombre { get; set; }
    public int Bateria { get; set; }

    // Métodos (Acciones)
    public void Saludar()
    {
        Console.WriteLine($"¡Hola! Soy {Nombre} y tengo {Bateria}% de batería.");
    }
}
```

#### Objetos

Una vez que tienes el plano, puedes construir todas las casas (objetos) que quieras. Para crear un objeto usamos la palabra clave `new`.

Agrega esto debajo en tu `Program.cs`:

```csharp
// 2. Creamos "Instancias" (Objetos) usando el molde
var robot1 = new Robot();
robot1.Nombre = "R2-D2";
robot1.Bateria = 100;

var robot2 = new Robot { Nombre = "Wall-E", Bateria = 15 };

// 3. Usamos sus métodos
robot1.Saludar();
robot2.Saludar();
```

Ejecuta de nuevo el proyecto (`dotnet run --project AwsPractice.Console`) y verás a tus dos robots saludando.

> [!TIP]
> **¿Por qué te enseñamos esto?**
> Porque cuando usemos AWS Bedrock, interactuaremos puramente con objetos. Crearemos un objeto `AmazonBedrockRuntimeClient` (el robot que habla con AWS), le pasaremos un objeto `ConverseRequest` (la carta con nuestra pregunta) y recibiremos un objeto `ConverseResponse` (la respuesta de la IA). ¡Todo en C# es un objeto!

### 3. AWS SDK for .NET

Ahora que entendemos cómo funcionan las Clases y los Objetos, estamos listos para traer las clases oficiales de Amazon a nuestro proyecto. Para esto, necesitamos instalar el **AWS SDK for .NET**.

En el mundo de .NET, las librerías de terceros (como el SDK de AWS) se distribuyen a través de un sistema llamado **NuGet**. Es como la "App Store" de código para desarrolladores C#.

#### Instalando la librería de Bedrock

Vamos a instalar específicamente el paquete que nos permite hablar con los modelos de IA de AWS Bedrock.

Abre tu terminal, asegúrate de estar dentro de la carpeta raíz de tu solución (`AwsPractice/`), y ejecuta estos dos comandos:

```bash
# Agregamos la librería al proyecto de consola
dotnet add AwsPractice.Console/AwsPractice.Console.csproj package AWSSDK.BedrockRuntime

# Agregamos la librería al proyecto web (AgentCore)
dotnet add AwsPractice.AgentCore/AwsPractice.AgentCore.csproj package AWSSDK.BedrockRuntime
```

> [!NOTE]
> Al presionar Enter, verás que la terminal descarga archivos de internet. Lo que está haciendo es traer todo el código de Amazon para que podamos usar sus clases (como `AmazonBedrockRuntimeClient`) directamente en nuestro proyecto.

### Verificando la instalación

Para comprobar que todo se instaló correctamente, vamos a importar (usar la palabra clave `using`) el código de Amazon en nuestra aplicación.

Vuelve a tu archivo `AwsPractice.Console/Program.cs` y agrega esta línea hasta arriba de todo:

```csharp
using Amazon.BedrockRuntime;

// Tu código anterior del Robot...
```

Si ejecutas `dotnet build`, el proyecto debería compilar sin errores, lo que significa que .NET encontró exitosamente las clases de AWS en tu computadora. ¡Estamos listos para conectar nuestra primera IA!

## Part 3: Config AWS

### Configurando IAM

Entraremmos al IAM de tu console aws y crearemos un user con pocos permisos

![IAM View](/taller-aws-images/image4.png)

![IAM View](/taller-aws-images/image5.png)

Con esto creamos nuestro acceso usando aws-cli

### Configurando aws-cli

``` bash
aws configure
```

Tu veras algo como:

``` bash
AWS Access Key ID : 
AWS Secret Access Key: 
Default region name: 
Default output format: 
```

Configuraremos con los datos de tu user IAM recien creado

Verificamos el usuario recien creado:

``` bash
aws sts get-caller-identity
```

Veras algo como:

``` bash
{
    "UserId": "AID*******",
    "Account": "652********",
    "Arn": "arn:aws:iam::652********:user/your-user"
}
```

Y con eso ya podremos consumir modelos foundationals

## Part 4: Hello Amazon Bedrock

### Hello, AI

Vamos a consumir nuestro primer modelo de AI creando nosotros el programa

Crea una clase llamada `CallLlm.cs` en tu console app y copia este contenido

``` cs
using Amazon.BedrockRuntime;
using Amazon.BedrockRuntime.Model;

/// <summary>
/// Demo de llamada simple a un LLM usando la Converse API de Bedrock.
/// Nota: tiene dos mensajes User consecutivos a propósito (para demostrar el bug).
/// </summary>
public static class CallLlm
{
    public static async Task RunAsync()
    {
        var client = new AmazonBedrockRuntimeClient();

        var request = new ConverseRequest
        {
            ModelId = "amazon.nova-micro-v1:0",
            Messages =
            [
                new Message
                {
                    Role = ConversationRole.User,
                    Content =
                    [
                        new ContentBlock
                        {
                            Text = "Explícame qué es AWS Bedrock en una frase."
                        }
                    ]
                },
                new Message
                {
                    Role = ConversationRole.User,
                    Content =
                    [
                        new ContentBlock
                        {
                            Text = "Dime que modelo eres."
                        }
                    ]
                }
            ]
        };

        var response = await client.ConverseAsync(request);
        Console.WriteLine(response.Output.Message.Content[0].Text);

        // Token usage
        var inputTokens = response.Usage.InputTokens;
        var outputTokens = response.Usage.OutputTokens;

        // Pricing: Amazon Nova Micro
        const double inputPrice = 0.035;
        const double outputPrice = 0.14;

        var inputCost = inputTokens / 1_000_000.0 * inputPrice;
        var outputCost = outputTokens / 1_000_000.0 * outputPrice;
        var totalCost = inputCost + outputCost;

        Console.WriteLine();
        Console.WriteLine($"Input tokens:  {inputTokens}");
        Console.WriteLine($"Output tokens: {outputTokens}");
        Console.WriteLine($"Total tokens:  {response.Usage.TotalTokens}");
        Console.WriteLine($"Input cost:  ${inputCost:F8}");
        Console.WriteLine($"Output cost: ${outputCost:F8}");
        Console.WriteLine($"Total cost:  ${totalCost:F8}");
    }
}
```

Analiza como funciona con tu instructor.

### Check others models

Existen dos tipos principales de modelos, on-demand e inference, para listar estos usa:

Para on-demand

``` bash
aws bedrock list-foundation-models \
  --by-inference-type ON_DEMAND \
  --query 'modelSummaries[].{Provider:providerName,Model:modelId,Inference:inferenceTypesSupported}' \
  --output table
```

``` bash
aws bedrock list-inference-profiles \
  --region us-east-1 \
  --query "inferenceProfileSummaries[].{id:inferenceProfileId,name:inferenceProfileName,status:status}" \
  --output table
```

### Pricing

Puedes ver los precios de los modelos que ofrece amazon aqui en

<https://aws.amazon.com/bedrock/pricing/>

## Part 5: Local and Cloud Agent

### Local Agent

En la console app agrega una clase llamada AgentDemo.cs y copia lo siguiente

``` bash
using Amazon.BedrockRuntime;
using Amazon.BedrockRuntime.Model;
using Amazon.Runtime.Documents;
using System.Text.Json;

/// <summary>
/// Demo del Agente con Agentic Loop (patrón ReAct + Tool Calling).
/// Muestra el razonamiento del modelo y el costo al final.
/// </summary>
public static class AgentDemo
{
    public static async Task RunAsync()
    {
        var client = new AmazonBedrockRuntimeClient();

        // MEMORIA: El historial de mensajes crece con cada iteración
        var messages = new List<Message>
        {
            new()
            {
                Role = ConversationRole.User,
                Content = [new ContentBlock { Text = "¿Qué hora es en Bolivia?" }]
            }
        };

        // TOOLS: Le decimos al modelo qué herramientas puede usar
        var toolConfig = new ToolConfiguration
        {
            Tools =
            [
                new Tool
                {
                    ToolSpec = new ToolSpecification
                    {
                        Name = "get_current_time",
                        Description = "Obtiene la hora actual de una ciudad.",
                        InputSchema = new ToolInputSchema
                        {
                            Json = Document.FromObject(new
                            {
                                type = "object",
                                properties = new
                                {
                                    city = new { type = "string", description = "Ciudad de la que quieres obtener la hora." }
                                },
                                required = new[] { "city" }
                            })
                        }
                    }
                }
            ]
        };

        var totalInputTokens = 0;
        var totalOutputTokens = 0;
        var iteration = 0;

        // AGENTIC LOOP: El corazón del agente
        while (true)
        {
            iteration++;
            Console.WriteLine($"\n{new string('═', 60)}");
            Console.WriteLine($"  ITERACIÓN {iteration} DEL AGENTIC LOOP");
            Console.WriteLine($"{new string('═', 60)}");

            var request = new ConverseRequest
            {
                ModelId = "amazon.nova-micro-v1:0",
                Messages = messages,
                ToolConfig = toolConfig,
                System =
                [
                    new SystemContentBlock
                    {
                        Text = """
                            Eres un agente útil. Responde en español.
                            Usa herramientas cuando las necesites.
                            """
                    }
                ]
            };

            Console.WriteLine($"\n📤 Enviando {messages.Count} mensaje(s) al modelo...");
            var response = await client.ConverseAsync(request);

            totalInputTokens += response.Usage.InputTokens ?? 0;
            totalOutputTokens += response.Usage.OutputTokens ?? 0;
            Console.WriteLine($"📥 Respuesta (Input: {response.Usage.InputTokens} | Output: {response.Usage.OutputTokens} tokens)");

            var assistantMessage = response.Output.Message;
            messages.Add(assistantMessage);

            // Mostrar razonamiento del modelo
            var textBlocks = assistantMessage.Content
                .Where(x => !string.IsNullOrWhiteSpace(x.Text))
                .ToList();

            if (textBlocks.Count > 0)
            {
                Console.WriteLine("\n🧠 RAZONAMIENTO DEL MODELO:");
                foreach (var tb in textBlocks)
                    Console.WriteLine(tb.Text);
            }

            var toolUseBlocks = assistantMessage.Content
                .Where(x => x.ToolUse != null)
                .ToList();

            // El modelo no pidió tools → Respuesta final → salir del loop
            if (toolUseBlocks.Count == 0)
            {
                Console.WriteLine("\n✅ El modelo decidió NO usar más herramientas. Respuesta final entregada.");
                break;
            }

            // El modelo pidió tools → ejecutarlas y devolver resultados
            Console.WriteLine($"\n🔧 El modelo solicitó {toolUseBlocks.Count} herramienta(s):");
            var toolResults = new List<ContentBlock>();

            foreach (var block in toolUseBlocks)
            {
                var toolUse = block.ToolUse!;
                Console.WriteLine($"\nTOOL CALL: {toolUse.Name}");

                var inputJson = JsonSerializer.Serialize(toolUse.Input);
                var parameters = JsonSerializer.Deserialize<Dictionary<string, string>>(inputJson)!;

                var result = toolUse.Name switch
                {
                    "get_current_time" => GetCurrentTime(parameters["city"]),
                    _ => $"Herramienta '{toolUse.Name}' no encontrada."
                };

                Console.WriteLine($"TOOL RESULT: {result}");

                toolResults.Add(new ContentBlock
                {
                    ToolResult = new ToolResultBlock
                    {
                        ToolUseId = toolUse.ToolUseId,
                        Content = [new ToolResultContentBlock { Text = result }]
                    }
                });
            }

            messages.Add(new Message
            {
                Role = ConversationRole.User,
                Content = toolResults
            });
        }

        // Resumen de costos
        const double inputPrice = 0.035;
        const double outputPrice = 0.14;
        var inputCost = totalInputTokens / 1_000_000.0 * inputPrice;
        var outputCost = totalOutputTokens / 1_000_000.0 * outputPrice;
        var totalCost = inputCost + outputCost;

        Console.WriteLine($"\n{new string('═', 60)}");
        Console.WriteLine($"  RESUMEN DEL AGENTE");
        Console.WriteLine($"{new string('═', 60)}");
        Console.WriteLine($"  Iteraciones del loop:  {iteration}");
        Console.WriteLine($"  Input tokens (total):  {totalInputTokens}");
        Console.WriteLine($"  Output tokens (total): {totalOutputTokens}");
        Console.WriteLine($"  Total tokens:          {totalInputTokens + totalOutputTokens}");
        Console.WriteLine();
        Console.WriteLine($"  Input cost:  ${inputCost:F8}");
        Console.WriteLine($"  Output cost: ${outputCost:F8}");
        Console.WriteLine($"  Total cost:  ${totalCost:F8}");
        Console.WriteLine($"{new string('═', 60)}");
    }

    private static string GetCurrentTime(string city)
    {
        var timezone = city.ToLowerInvariant() switch
        {
            "cochabamba" => "America/La_Paz",
            "la paz" => "America/La_Paz",
            "santa cruz" => "America/La_Paz",
            "sucre" => "America/La_Paz",
            "oruro" => "America/La_Paz",
            "bolivia" => "America/La_Paz",
            _ => "UTC"
        };

        var tz = TimeZoneInfo.FindSystemTimeZoneById(timezone);
        var time = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, tz);
        return $"La hora actual en {city} es {time:HH:mm:ss}.";
    }
}
```

Analiza como funciona con tu instructor.

### Cloud Agent

Para esta seccion mira como tu instructor realiza el deploy y presta atencio en entender que es agent core!

Enjoy!
