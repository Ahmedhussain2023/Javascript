class user {
    constructore(name, age) {
        this.name = name;
        this.age = age;
    }

    calcAge(){
        return 2023 - this.age
    }
}

const user1 = new user('ali',23)