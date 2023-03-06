"use client"
import { ChakraBaseProvider } from "@chakra-ui/react"
import { } from '@chakra-ui/react'
import { useState } from "react";
import {
  Heading,
  VStack,
  HStack,
  Input,
  Button,
  Checkbox,
  Text,
} from "@chakra-ui/react";

export default function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (newTodo !== "") {
      setTodos([...todos, { id: todos.length, text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <ChakraBaseProvider>
    <Heading pl="600px" color='white' bg="GrayText" size='lg' fontSize='30px'>
    Add Task Here
  </Heading>
    <VStack p="4">
      <Input
        value={newTodo}
        placeholder="Add a new todo"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Checkbox isChecked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
          <Text textDecoration={todo.completed ? "line-through" : ""}>{todo.text}</Text>
          <Button size="xs" colorScheme="red" onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
        </HStack>
      ))}
    </VStack>
    </ChakraBaseProvider>
  );
}

  
    
      
    

