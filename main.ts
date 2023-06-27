basic.forever(function () {
    if (input.compassHeading() == 1) {
        basic.showArrow(ArrowNames.North)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
