describe('Abogado', function(){
    it('Should be able to get the lawyer name', function(){
        var abogado = new Abogado('Camilo Fajardo', '/img/CamiloFajardo.jpg', 'Abogada con Maestría en Relaciones Laborales y 10 años de experiencia. Experta en resolución de conflictos laborales y casos de acoso en el trabajo.','Derecho Laboral y Relaciones Laborales');
        expect(abogado.getNombreAbogado()).toBe('Camilo Fajardo');
    });

    it('Should be able to get the lawyer description', function(){
        var abogado = new Abogado('Camilo Fajardo', '/img/CamiloFajardo.jpg', 'Abogada con Maestría en Relaciones Laborales y 10 años de experiencia. Experta en resolución de conflictos laborales y casos de acoso en el trabajo.','Derecho Laboral y Relaciones Laborales');
        expect(abogado.getDescripcionAbogado()).toBe('Abogada con Maestría en Relaciones Laborales y 10 años de experiencia. Experta en resolución de conflictos laborales y casos de acoso en el trabajo.','Derecho Laboral y Relaciones Laborales');
    });

    it('Should be able to get the lawyer specialization', function(){
        var abogado = new Abogado('Camilo Fajardo', '/img/CamiloFajardo.jpg', 'Abogada con Maestría en Relaciones Laborales y 10 años de experiencia. Experta en resolución de conflictos laborales y casos de acoso en el trabajo.','Derecho Laboral y Relaciones Laborales');
        expect(abogado.getEspecialidadAbogado()).toBe('Derecho Laboral y Relaciones Laborales');
    });

    it('Should be able to change the lawyer name', function(){
        var abogado = new Abogado('Camilo Fajardo', '/img/CamiloFajardo.jpg', 'Abogada con Maestría en Relaciones Laborales y 10 años de experiencia. Experta en resolución de conflictos laborales y casos de acoso en el trabajo.','Derecho Laboral y Relaciones Laborales');
        abogado.setNombreAbogado('Adriana García');
        expect(abogado.getNombreAbogado()).toBe('Adriana García');
    });

})