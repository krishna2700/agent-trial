# Java Programming Language

## What is Java?

Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle) in 1995. It follows the principle of "Write Once, Run Anywhere" (WORA), meaning compiled Java code can run on any platform that supports Java without recompilation.

## Key Features

### 1. Platform Independent
Java code is compiled into bytecode that runs on the Java Virtual Machine (JVM), making it platform-independent.

### 2. Object-Oriented
Everything in Java is an object, which makes code modular, flexible, and reusable.

### 3. Secure
Java provides a secure environment with features like bytecode verification, no explicit pointers, and a security manager.

### 4. Robust
Strong memory management, exception handling, and type checking make Java reliable and error-resistant.

### 5. Multithreaded
Java supports concurrent execution of multiple threads, enabling efficient multitasking.

## Basic Syntax

### Hello World Example
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Variables and Data Types
```java
int number = 42;
double price = 19.99;
String name = "Java";
boolean isActive = true;
```

### Control Structures
```java
// If-else statement
if (number > 0) {
    System.out.println("Positive");
} else {
    System.out.println("Negative or zero");
}

// For loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// While loop
while (number > 0) {
    number--;
}
```

### Classes and Objects
```java
public class Car {
    private String brand;
    private int year;
    
    // Constructor
    public Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    // Method
    public void displayInfo() {
        System.out.println(brand + " - " + year);
    }
}

// Creating an object
Car myCar = new Car("Toyota", 2023);
myCar.displayInfo();
```

## Common Use Cases

- **Enterprise Applications**: Large-scale business applications
- **Android Development**: Mobile app development
- **Web Applications**: Server-side applications using frameworks like Spring
- **Big Data**: Processing with Hadoop and Apache Spark
- **Cloud Applications**: Microservices and cloud-native applications

## Development Tools

- **JDK (Java Development Kit)**: Required to develop Java applications
- **IDEs**: IntelliJ IDEA, Eclipse, NetBeans
- **Build Tools**: Maven, Gradle
- **Frameworks**: Spring, Hibernate, JavaFX

## Getting Started

1. **Install JDK**: Download and install the Java Development Kit
2. **Set Environment Variables**: Configure JAVA_HOME and PATH
3. **Write Code**: Create a `.java` file
4. **Compile**: Use `javac FileName.java` to compile
5. **Run**: Execute with `java FileName`

## Advantages

- Large community and extensive documentation
- Rich API and libraries
- Automatic memory management (Garbage Collection)
- Strong backward compatibility
- Excellent performance

## Popular Java Frameworks

- **Spring Boot**: For building microservices and web applications
- **Hibernate**: Object-relational mapping (ORM)
- **Apache Struts**: Web application framework
- **JavaFX**: For building desktop applications

---

Java continues to be one of the most popular programming languages worldwide, powering millions of applications across various domains.
