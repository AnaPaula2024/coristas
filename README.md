# 📚 Guia de Configuração e Desenvolvimento do Coral Project

Este documento detalha as etapas necessárias para configurar o ambiente, revisar o status do Front-end (Login) e iniciar a codificação do Back-end, focado em **Persistência de Dados (JPA)** e **Autenticação**.

---

## 🚀 1. Configuração do Ambiente e Inicialização

O projeto é gerenciado com **Maven** e executado no **Apache Tomcat**.

### 1.1. Pré-requisitos

Certifique-se de que os seguintes softwares estão instalados:

* **JDK 17** ou superior (Java Development Kit).
* **Apache Maven** (versão 3.6+).

### 1.2. Inicialização do Servidor (Tomcat)

O servidor é gerenciado via plugin Maven.

* **Comando de Execução:** Na raiz do projeto, use o comando:
    ```bash
    mvn tomcat7:run
    ```
* **Acesso:** A tela de Login está disponível em: `http://localhost:8080/coral-project/login.html`

---

## 📁 2. Estrutura de Pastas e Próximas Ações

O repositório já deve ter a estrutura de pastas Java principal. O foco agora é preencher essas pastas.

### Back-end (Java) - STATUS ATUAL

| Caminho | Conteúdo | Status da Pasta | Próxima Ação |
| :--- | :--- | :--- | :--- |
| `src/main/java/com/coral/controller/` | Arquivo `LoginController.java` | OK | Nenhuma ação imediata. |
| **`src/main/java/com/coral/model/`** | **Vazia** | **PASTA OK** | **Ação Imediata:** Criar o arquivo **`Corista.java`** (Entidade JPA). |
| **`src/main/java/com/coral/dao/`** | **Vazia** | **PASTA OK** | **Próxima Ação:** Criar o arquivo **`CoristaDAO.java`** (Camada de acesso a dados). |

**Ação:** O foco agora é na criação dos **arquivos Java** dentro das pastas existentes (`model` e `dao`).

---

## 🎨 3. Status e Colaboração no Front-end

O Front-end da tela de Login está **100% concluído** e validado com o Figma.

### Divisão de Tarefas Front-end

| Tela | Status | Responsável |
| :--- | :--- | :--- |
| **Login** | **CONCLUÍDO** | Estilização CSS e Lógica JS prontas. |
| **Home (Ativos/Inativos)** | Em Andamento | Miguel |
| **Agenda** | Em Andamento | Tainá |

**Foco Atual:** O desenvolvimento está focado integralmente na lógica de Back-end para autenticação e gestão de dados (JPA).

---

## ⚙️ 4. Dependências (JPA e Banco de Dados)

Confirme que as dependências necessárias para a persistência de dados (JPA/Hibernate) e conexão com o banco (Exemplo: PostgreSQL) estão no `pom.xml`.

### Dependências a Conferir no `pom.xml`

```xml
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>5.6.15.Final</version>
</dependency>

<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <version>42.5.4</version>
</dependency>

<dependency>
    <groupId>jakarta.servlet</groupId>
    <artifactId>jakarta.servlet-api</artifactId>
    <version>5.0.0</version>
    <scope>provided</scope>
</dependency>
```
**Ação:** Após conferir/adicionar as dependências, execute o comando para baixar e empacotar:

```bash
mvn clean install
```

## ⏭️ 5. Próximos Passos (Back-end)
A ordem de implementação é crucial para a persistência de dados.

Entidade JPA: Criar a classe Corista.java em com.coral.model/.

Configuração da Persistência: Criar o arquivo persistence.xml (em src/main/resources/META-INF/).

Acesso a Dados: Codificar a classe CoristaDAO.java em com.coral.dao/.
