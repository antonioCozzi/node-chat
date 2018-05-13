const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        },{
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }]
    })

    it('should add a new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: "Antonio",
            room: "The Vetrya Culosssss"
        }
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    })

    it('should return names for Node Course', () => {
        var usersList = users.getUserList('Node Course');
        expect(usersList).toEqual(['Mike', 'Julie'])
    })

    it('should remove a user', () => {
        var userId = '4';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    })

    it('should not remove user', () => {
        var userId = '99';
        var user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    })

    it('should find user', () => {
        var user = users.getUser('1');
        expect(user).toEqual(users.users[0])
    })

    it('should not find user', () => {
        var user = users.getUser('4');
        expect(user).toBe(undefined)        
    })
})