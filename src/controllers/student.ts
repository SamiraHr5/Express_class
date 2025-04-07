import { Request, Response } from 'express';

const students = [
    { matricula: 'a00992678', nombre: 'Juan Perez', calificacion: 95, adeudos: false },
    { matricula: 'a01942578', nombre: 'Ana Gomez', calificacion: 85, adeudos: false },
    { matricula: 'a01679311', nombre: 'Luis Garcia', calificacion: 55, adeudos: false },
    { matricula: 'a00835476', nombre: 'Pedro Martinez', calificacion: 60, adeudos: true },
    { matricula: 'a00891234', nombre: 'Sofia Lopez', calificacion: 92, adeudos: true },
    { matricula: 'a01234628', nombre: 'Carlos Rodriguez', calificacion: 78, adeudos: false },
    { matricula: 'a00771234', nombre: 'Maria Sanchez', calificacion: 70, adeudos: true },
    { matricula: 'a00879234', nombre: 'Karla Perez', calificacion: 60, adeudos: true },
    { matricula: 'a01709225', nombre: 'Francisco Garza', calificacion: 75, adeudos: false },
    { matricula: 'a00121244', nombre: 'Maria Rey', calificacion: 70, adeudos: true },
];

export const getStudents = (req: Request, res: Response) => {
    const studentMessages = students.map(student => {
        let mensaje = '';

        if (student.calificacion > 90) {
            mensaje = student.adeudos ? 'Tenias honores pero tienes un adeudo' : 'Te graduaste con honores';
        } else if (student.calificacion >= 70) {
            mensaje = 'Pasaste muy apenas';
        } else {
            mensaje = student.adeudos ? 'Expulsado' : 'Como no tienes adeudo tienes derecho a un examen de recuperacion';
        }

        return {
            matricula: student.matricula,
            mensaje: mensaje,
        };
    });

    res.json(studentMessages);
};