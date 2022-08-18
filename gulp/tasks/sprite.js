
import spritesmith from 'gulp.spritesmith'

export const sprite = () => {
    return app.gulp.src(app.path.src.sprite).pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        padding: 10,
        algorithm: 'top-down',
        imgPath: '../images/sprite/sprite.png'
    }))
    // .pipe(dest('src/images/sprite/'));
    .pipe(app.gulp.dest('src/images/sprite'));
}