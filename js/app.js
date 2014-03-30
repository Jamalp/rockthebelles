var app;

app = angular.module("app", []);

app.controller("AppCtrl", function($scope, $sce) {

    $scope.showBio = function(artist) {
        $scope.selectedArtist = artist;
        $scope.selectedArtist.soundcloud_src = $sce.trustAsResourceUrl(artist.soundcloud_src);
    };

    $scope.artists = [
        {"name": "ChopChopp", "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, debitis iuremet blanditiis eos enim voluptas ab cupiditate id incidunt error cumque aliquam officiis tempore impedit ratione molestiae quibusdam nostrum!", "image": "img/chop.jpg", "soundcloud_src": "http://w.soundcloud.com/player/?url=https://soundcloud.com/chopchopp&show_artwork=true&liking=true&sharing=true&auto_play=false"
        },
        {"name": "Kalae Nouveau", "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, accusantium in quam corrupti repellendus labore perferendis. Animi, iusto, odio, repudiandae fugiat omnis facere fugit ipsum voluptatem totam ullam quis quidem.", "image": "img/kalae.jpg", "soundcloud_src" : "http://w.soundcloud.com/player/?url=https://soundcloud.com/kalaenouveau-1&show_artwork=true&liking=true&sharing=true&auto_play=false"
        },
        {"name": "Boog Brown", "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, accusantium in quam corrupti repellendus labore perferendis. Animi, iusto, odio, repudiandae fugiat omnis facere fugit ipsum voluptatem totam ullam quis quidem.", "image": "img/boog2.png", "soundcloud_src" : "http://w.soundcloud.com/player/?url=https://soundcloud.com/84area/boog-brown-illastrate-lex&show_artwork=true&liking=true&sharing=true&auto_play=false"
        },
        {"name": "Jean Grae", "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, accusantium in quam corrupti repellendus labore perferendis. Animi, iusto, odio, repudiandae fugiat omnis facere fugit ipsum voluptatem totam ullam quis quidem.", "image": "img/grae.jpg", "soundcloud_src" : "http://w.soundcloud.com/player/?url=https://soundcloud.com/jean-grae&show_artwork=true&liking=true&sharing=true&auto_play=false"
        }

    ]
    $scope.showBio($scope.artists[0]);
});