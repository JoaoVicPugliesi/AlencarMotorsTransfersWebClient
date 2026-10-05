function play_sound_effect(effect_id, volume = 0.05) {
    let effect = document.querySelector(`#${effect_id}`);
    if (!effect) {
        effect = document.createElement('audio');
        effect.id = effect_id;
        effect.src = `js/audios/${effect_id}.mp3`;
        document.body.appendChild(effect);
    }
    effect.pause();
    effect.currentTime = 0;
    effect.volume = volume;
    effect.play();
}

export default play_sound_effect;