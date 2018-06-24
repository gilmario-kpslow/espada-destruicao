

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
// let plataformas;
// let player;
// let cursors;
// let stars;
// var score = 0;
// var scoreText;
// let bombs;
// let gameOver;

function preload() {
    this.load.image('sky', '../exemplo02/img/fundo02.svg');
    this.load.image('arvore', '../exemplo02/img/arvore.png');
    this.load.image('personagem', '../exemplo02/img/personagem.svg');
    this.load.image('fundo', '../exemplo02/img/fundoprincipal.svg');
    this.load.image('espada', '../exemplo02/img/espada.png');
    this.load.image('logo', '../exemplo02/img/logo.svg');

    
    
}

function create() {
    
       start(this);

    // plataformas = this.physics.add.staticGroup();
    // plataformas.create(400, 568, 'plataforma').setScale(2).refreshBody();
    // plataformas.create(600, 400, 'plataforma');
    // plataformas.create(50, 250, 'plataforma');
    // plataformas.create(750, 200, 'plataforma');

    // player = this.physics.add.sprite(100, 450, 'dude');

    // player.setBounce(0.2);
    // player.setCollideWorldBounds(true);
    // this.anims.create({
    //     key: 'left',
    //     frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    //     frameRate: 10,
    //     repeat: -1
    // });

    // this.anims.create({
    //     key: 'turn',
    //     frames: [{ key: 'dude', frame: 4 }],
    //     frameRate: 20
    // });

    // this.anims.create({
    //     key: 'right',
    //     frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    //     frameRate: 10,
    //     repeat: -1
    // });
    // player.body.setGravityY(300);

    // this.physics.add.collider(player, plataformas);

    // cursors = this.input.keyboard.createCursorKeys();


    // stars = this.physics.add.group({
    //     key: 'star',
    //     repeat: 11,
    //     setXY: { x: 12, y: 0, stepX: 70 }
    // });

    // stars.children.iterate(function (child) {

    //     child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    // });

    // this.physics.add.collider(stars, plataformas);

    // this.physics.add.overlap(player, stars, collectStar, null, this);

    // scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    // bombs = this.physics.add.group();

    // this.physics.add.collider(bombs, plataformas);

    // this.physics.add.collider(player, bombs, hitBomb, null, this);

}

function update() {
    // if (cursors.left.isDown) {
    //     player.setVelocityX(-160);
    //     player.anims.play('left', true);
    // }
    // else if (cursors.right.isDown) {
    //     player.setVelocityX(160);

    //     player.anims.play('right', true);
    // }
    // else {
    //     player.setVelocityX(0);
    //     player.anims.play('turn');
    // }

    // if (cursors.up.isDown && player.body.touching.down) {
    //     player.setVelocityY(-550);
    // }
}




function collectStar(player, star) {
    // star.disableBody(true, true);
    // score += 10;
    // scoreText.setText('Score: ' + score);

    // if (stars.countActive(true) === 0)
    // {
    //     stars.children.iterate(function (child) {

    //         child.enableBody(true, child.x, 0, true, true);

    //     });

    //     var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

    //     var bomb = bombs.create(x, 16, 'bomb');
    //     bomb.setBounce(1);
    //     bomb.setCollideWorldBounds(true);
    //     bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    //     bomb.allowGravity = false;

    // }
}

function hitBomb(player, bomb) {
    // this.physics.pause();

    // player.setTint(0xff0000);

    // player.anims.play('turn');

    // gameOver = true;
}


function start(instance){
    instance.add.image(400, 300, 'fundo');
    instance.add.image(400, 300, 'espada');
    let text = "Novo Jogo";
    let style = { font: "30px URW Chancery L", fill: "#ff0000", align: "center" };

    let t = instance.add.text(100, 550, text, style);
    instance.add.text(620, 550, 'Opções', style);

    let logo = instance.add.image(400, 300, 'logo');
    logo.setScale(1)
    
}