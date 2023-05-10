import { createI18n } from 'vue-i18n'
import en from './en'
import ch from './ch'
import fr from './fr'
import ind from './ind'
import jp from './jp'
import pr from './pr'
import vn from './vn'
const i18n = new createI18n({
    locale: 'ch', // 语言标识
    messages: {
        en:en,
        ch:ch,
        fr:fr,
        ind:ind,
        jp:jp,
        pr:pr,
        vn:vn
    },
})

export default i18n;