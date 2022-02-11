import { HStack, Input, Button } from '@chakra-ui/react';
import React from 'react'

function addToDo(){
    function submit(e){

    }
    return(
        <form onSubmit={submit}>
            <HStack mt='8'>
             <Input variant="filled" placeholder="Add something to do!"/>
             <Button colorScheme="red" px="8" type='submit'>Add Todo</Button>       
            </HStack>
        </form>
    )
}

export default addToDo;