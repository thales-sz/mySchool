import { Model, UUID, UUIDV4 } from "sequelize";
import db from '.';

class Student extends Model {
  id!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  birthday!: Date;
  classId!: number;
  gradeId!: number;
  subjectId!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Student.init({
  id: {
    allowNull: false,
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  }
}, {
  sequelize: db,
  modelName: "Students"
})

export default Student;