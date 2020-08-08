import React from "react";
import Header from "../../components/PageHeader";
import "./styles.css";
import TeacherItem from '../../components/TeacherItem';
import Input from "../../components/Input";
import Select from "../../components/Select";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
        <Select name="subject" label="Matéria" options={[
          {value: 'Artes',label:'Artes'},
          {value: 'Biologia',label:'Biologia'},
          {value: 'Física',label:'Física'},
          {value: 'Quimica',label:'Quimica'},
          {value: 'Matemática',label:'Matemática'},
          {value: 'História',label:'História'},
          {value: 'Geografia',label:'Geografia'},
          ]} />

           <Select name="week_day" label="Dia da semana" options={[
          {value: '0',label:'Domingo'},
          {value: '1',label:'Segunda'},
          {value: '2',label:'Terça'},
          {value: '3',label:'Quarta'},
          {value: '4',label:'Quinta'},
          {value: '5',label:'Sexta'},
          {value: '6',label:'Sabado'},

          ]} />
         <Input  type="time" name="time" label="Hora"/>
        </form>
      </Header>
      <main>
      <TeacherItem/>
      <TeacherItem/>
      <TeacherItem/>
      </main>
    </div>
  );
}

export default TeacherList;
