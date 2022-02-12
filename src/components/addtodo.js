import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import {nanoid} from 'nanoid';


function AddToDo({addToDo}){

    const toast = useToast();

    function submit(e){
        e.preventDefault();
        if(!content){
            toast({
                title: 'No content',
                status: 'error',
                duration: 3000,
                isClosable: true,
                })
            return
        }
        const todo = {id: nanoid(), body: content,}
        addToDo(todo)
        setContent('')
    }

    const [content, setContent] = useState('') 

    return(
        <form onSubmit={submit}>
            <HStack mt='8'>
             <Input variant="filled" placeholder="Add something to do!" value={content} onChange={(e) => setContent(e.target.value)} />
             <Button colorScheme="red" px="8" type='submit'>Add Todo</Button>       
            </HStack>
        </form>
    )
}

export default AddToDo;