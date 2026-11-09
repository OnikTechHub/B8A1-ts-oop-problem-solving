
const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier !== undefined) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};



const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    if (input === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};



const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
  const latitude = coordinate[0];
  const longitude = coordinate[1];
  const locationName = coordinate[2];
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};




const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  let combined: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    combined = combined.concat(arrays[i]);
  }
  return combined;
};




interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  let popularList: Course[] = [];
  for (let i = 0; i < courses.length; i++) {
    let currentCourse = courses[i];
    if (currentCourse.isPublished === true && currentCourse.students >= minStudents) {
      popularList.push(currentCourse);
    }
  }
  return popularList;
};



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  let values: T[K][] = [];
  for (let i = 0; i < items.length; i++) {
    values.push(items[i][key]);
  }
  return values;
};



class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  public getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}


class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  public getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};