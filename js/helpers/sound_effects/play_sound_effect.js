function play_sound_effect(effect_id, volume = 0.05) {
    const effect = document.querySelector(`#${effect_id}`);
    console.log(effect);
    if (!effect) return;
    effect.pause();
    effect.currentTime = 0;
    effect.volume = volume;
    effect.play();
}

export default play_sound_effect;