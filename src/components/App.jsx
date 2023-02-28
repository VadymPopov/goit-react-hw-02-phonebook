import React, {Component} from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Layout, MainTitle, Title } from "./Layout/Layout";
import ContactList from './ContactList'
import ContactForm from "./ContactForm";
import Filter from "./Filter";

class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }
  
  addContact = newContact=>{
    this.setState(prevState => ({
      contacts:[...prevState.contacts, newContact]
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts.filter(contact => contact.id !== contactId)]
      }
    });
  };

  filterContacts = () => {
    const {contacts, filter} = this.state;
    const lowerCaseFilter = filter.toLowerCase();

    if(filter){
      return contacts.filter(contact => contact.name.toLowerCase().includes(lowerCaseFilter))
    } else {
      return contacts;
    }
  }

  render(){
    const contacts = this.filterContacts();
    
    return (
        <Layout>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm  onSubmit={this.addContact} contacts={this.state.contacts}/>
      
          <Title>Contacts</Title>
          <Filter onChange={e => this.setState({filter: e.target.value})} value={this.state.filter}/>
           <ContactList contacts ={contacts} deleteContact={this.deleteContact}>
           </ContactList>
        <GlobalStyle/>
        </Layout>
    );
  };

};

export default App; 

