import { HStack, VStack, Text, IconButton, StackDivider, Spacer} from '@chakra-ui/react'
import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

function todoList({todos, deleteTodo}){
        return(
        <VStack divider={<StackDivider/>} borderColor="gray.100" borderWidth='4px' p='4'
        borderRadius='lg'
        width="100%"
        maxW={{base:'90vw', sm:'80vw', lg:'50vw', xl: '40vw'}}
        alignItems='stretch'
        >
        {todos.map(todo => (
            <HStack key={todo.id}>
              <Text fontWeight='medium'>{todo.body}</Text>
              <Spacer/>
              <IconButton icon={<FaTrashAlt />} isRound='true' size='lg' onClick={() => deleteTodo(todo.id)}/> 
            </HStack>
        ))}
        </VStack>
        )
}

export default todoList