const request = require('supertest');

describe('Profile API', () => {
  it('Create a profile', async () => {
    const response = await request('https://oviovi.site/api/profile')
      .post('/')
      .send({
        name: 'yuriy',
        phone: 79821816281,
        email: 'yurkiselev@yandex.ru',
        password: '88437006'
      });
    expect(response.status).toBe(200);
  });
});
let access_token;

describe('Profile API', () => {
  it('login a profile', async () => {
    const response = await request('https://oviovi.site/api/profile/login')
      .post('/')
      .send({
        email: 'yurkiselev@yandex.ru',
        password: '88437006'
      });
    expect(response.status).toBe(200);
   token = response.body.access_token
  });
});

describe('Profile API', () => {
  it('info a profile', async () => {
    const response = await request('https://oviovi.site/api/profile')
      .get('/')
      .set('Authorization', `Bearer ${token}`)
      .send();
    expect(response.status).toBe(200);
  });
});

describe('Profile API', () => {
  it('Change user password', async () => {
    const response = await request('https://oviovi.site/api/profile/password')
      .patch('/')
      .set('Authorization', `Bearer ${token}`)
      .send({
        password: '88437006',
        new_password:"8843700"
      });
    expect(response.status).toBe(200);
  });
});

describe('Profile API', () => {
  it('login a profile new pass', async () => {
    const response = await request('https://oviovi.site/api/profile/login')
      .post('/')
      .send({
        email: 'yurkiselev@yandex.ru',
        password: '8843700'
      });
    expect(response.status).toBe(200);
  });
});

describe('Profile API', () => {
  it('Change profile color', async () => {
    const response = await request('https://oviovi.site/api/profile/color')
      .patch('/')
      .set('Authorization', `Bearer ${token}`)
      .send({
        "color": "#00CC00"
      });
    expect(response.status).toBe(200);
  });
});

describe('Profile API', () => {
  it('Change profile fio', async () => {
    const response = await request('https://oviovi.site/api/profile/fio')
      .patch('/')
      .set('Authorization', `Bearer ${token}`)
      .send({
        "name": "Yuriy",
        "lname": "Kiselev",
        "pname": "Vladimirivich"
      });
    expect(response.status).toBe(200);
  });
});

describe('Profile API', () => {
  it('Delete a profile', async () => {
    const response = await request('https://oviovi.site/api/profile')
      .delete('/')
      .set('Authorization', `Bearer ${token}`)
      .send();
    expect(response.status).toBe(200);
  });
});

