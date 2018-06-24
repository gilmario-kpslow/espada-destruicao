

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update:update
    }
};

const game = new Phaser.Game(config);
// const game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
// let platforms;
// let player;
// let cursors;

function update() {

    var hitPlatform = game.physics.arcade.collide(player, platforms);

     //  Reset the players velocity (movement)
     player.body.velocity.x = 0;

     if (cursors.left.isDown)
     {
         //  Move to the left
         player.body.velocity.x = -150;
 
         player.animations.play('left');
     }
     else if (cursors.right.isDown)
     {
         //  Move to the right
         player.body.velocity.x = 150;
 
         player.animations.play('right');
     }
     else
     {
         //  Stand still
         player.animations.stop();
 
         player.frame = 4;
     }
 
     //  Allow the player to jump if they are touching the ground.
     if (cursors.up.isDown && player.body.touching.down && hitPlatform)
     {
         player.body.velocity.y = -350;
     }
}

function preload() {
    this.load.image('fundo', 'img/fundo01.svg');
    this.load.image('bloco', 'img/plataforma.svg');
    // // // // // // // // // // 
    this.load.spritesheet('megaman', 'img/mega.gif', 35, 54, 3,0,100,5);
}

function create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.add.image(0, 0, 'fundo');
    

    platforms = this.add.group();
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'bloco');

    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'bloco');

    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, 'bloco');

    ledge.body.immovable = true;

    game.physics.arcade.enable(platforms);

    player = this.add.sprite(32, game.world.height - 150, 'megaman',0);
    game.physics.arcade.enable(player);

    player.body.bounce.y = 0.0;
    player.body.gravity.y = 900;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    cursors = game.input.keyboard.createCursorKeys();

}