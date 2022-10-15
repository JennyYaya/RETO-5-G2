package com.ga.retos.servicio;

import com.ga.retos.entidades.Category;
import com.ga.retos.entidades.Message;
import com.ga.retos.repositorio.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll() {
        return messageRepository.getAll();
    }

    public Optional<Message> getMessage(int id) {
        return messageRepository.getMessage(id);
    }

    public Message save(Message m) {
        if (m.getIdMessage() == null) {
            return messageRepository.save(m);
        } else {
            Optional<Message> me = messageRepository.getMessage(m.getIdMessage());
            if (me.isPresent()) {
                return m;
            } else {
                return messageRepository.save(m);
            }
        }

    }

    public Message update(Message m) {
        if (m.getIdMessage() != null) {
            Optional<Message> me = messageRepository.getMessage(m.getIdMessage());
            if (me.isPresent()) {
                if (m.getMessageText() != null) {
                    me.get().setMessageText(m.getMessageText());
                }
                messageRepository.save(me.get());
                return me.get();
            } else {
                return m;
            }
        } else {
            return m;
        }
    }

    public boolean delete(int id) {
        Boolean aBoolean = false;
        Optional<Message> m = messageRepository.getMessage(id);
        if (m.isPresent()) {
            messageRepository.delete(m.get());
            aBoolean = true;
        }
        return aBoolean;
    }
}




