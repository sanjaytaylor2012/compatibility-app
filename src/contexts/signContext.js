import React, { useContext, useState } from "react";

const signContext = React.createContext();

export function useSigns() {
  return useContext(signContext);
}

export const SignProvider = ({ children }) => {
  const [userImage, setUserImage] = useState("");
  const [partnerImage, setPartnerImage] = useState("");
  const [description, setDescription] = useState("");
  const [compatibility, setCompatibility] = useState("");

  const [descriptions, setDescriptions] = useState([
    {
      name1: "Aries",
      name2: "Aries",
      description:
        "have incredible chemistry. When Aries and Aries come together, there are bound to be fireworks. Imagine the energy when two fire elements come together for love or any kind of relationship! It is likely to be explosive for sure. Thus, when they are in a relationship, there is a fiery passions that cannot be quenched.",
      compatibility: "92%",
    },
    {
      name1: "Aries",
      name2: "Taurus",
      description:
        "have great compatibility as they are both fire signs. Aries likes to take things easy in their relationship. Physical relationships between both the individuals are very calm and intimate, with a balanced approach. However, this does not deny the fact that there is a strong romance and fiery passion of love involved in the relationship.",
      compatibility: "96%",
    },
    {
      name1: "Aries",
      name2: "Gemini",
      description:
        "have a strong compatibility. These two signs are compatible in a sexual, emotional, and intellectual sense. As long as they work on their communication, Gemini and Aries are going to make great lovers, friends, and partners.",
      compatibility: "94%",
    },
    {
      name1: "Aries",
      name2: "Cancer",
      description:
        "have a very loving bond. Aries and Cancer need to be serious about one another in order to last a long time together. However, they have a fiery romance and an instant connection that allows them to keep the spark going. ",
      compatibility: "90%",
    },
    {
      name1: "Aries",
      name2: "Leo",
      description:
        "have a very high compatibility. If these signs describe you and your crush, you're in luck. These fire signs are highly compatible. Whether Leo and Aries are planning on entering a relationship or becoming close friends, they will stay in each other's lives for the long-run.",
      compatibility: "92%",
    },
    {
      name1: "Aries",
      name2: "Virgo",
      description:
        "have an interesting dynamic. These zodiac signs have the potential to make a relationship last. With the fiery passion of the Ares and the calm nature of a Virgo, there will be a romantic tension that will have to be broken.",
      compatibility: "98%",
    },
    {
      name1: "Aries",
      name2: "Libra",
      description:
        "have a lot in common. There is a clear-cut boundary between the two, but over time this can be overcome and a passionate and strong romantic relationship is inevitable.",
      compatibility: "97%",
    },
    {
      name1: "Aries",
      name2: "Scorpius",
      description:
        "are an interesting couple. They are both passionate and stubborn, so they will want to have things their way. This can lead to a strong romantic tension and a passionate affair as the two signs are strong willed.",
      compatibility: "95%",
    },
    {
      name1: "Aries",
      name2: "Sagittarius",
      description:
        "have a fiery relationship. This relationship burns hot and bright. The spark that ignites this relationship can blossom into a passionate affair and the instant connection will allow the relationship to last.",
      compatibility: "92%",
    },
    {
      name1: "Aries",
      name2: "Capricorn",
      description:
        "have an intersting dynamic. These signs are complete opposites. However, often, opposites attract. They work well together. And can have a very fulfilling relationship full of romance and love.",
      compatibility: "91%",
    },
    {
      name1: "Aries",
      name2: "Aquarius",
      description:
        "are extremely compatible. They are going to have a fierce, passionate relationship together. As long as Aries and Aquarius can control their hot heads every once in a while and try not to pick a fight with one another, these two will be good together.",
      compatibility: "94%",
    },
    {
      name1: "Aries",
      name2: "Pisces",
      description:
        "will last together. They are extremely compatible on a sexual and emotional level. They will have interesting conversations nad be able to trust and open up to each other. This relationship will not require much effort for the two.",
      compatibility: "99%",
    },
    {
      name1: "Taurus",
      name2: "Taurus",
      description:
        "thrive together. Taurus is a zodiac sign that thrives in a relationship with their mirror image, and a couple of earth-anchored Taureans are content to spend their time enjoying each others company with a passionate relationship.",
      compatibility: "95%",
    },
    {
      name1: "Taurus",
      name2: "Gemini",
      description:
        "have potential for a solid relationship as well. These star signs share a love for beautiful things, harmonious surroundings, and beautiful experiences. Add their mutual affinity for traditional values and nostalgic reminiscences, and a Taurus and a Cancer have a solid foundation.",
      compatibility: "97%",
    },
    {
      name1: "Taurus",
      name2: "Cancer",
      description:
        "have such great compatibility that they feel like soulmates. These two are affectionate and nurturing and share many of the same values and interests. As a water sign, Cancer flows naturally into the earth sign, Taurus, to make one of the strongest matches in the zodiac.",
      compatibility: "99%",
    },
    {
      name1: "Taurus",
      name2: "Leo",
      description:
        "often work out. The lion-hearted Leos, whose flashy ways attract Taurus's attention initially can lead to a fiery relationship. Both are strong personalities and can lead to a passionate relationship.",
      compatibility: "94%",
    },
    {
      name1: "Taurus",
      name2: "Virgo",
      description:
        "have many qualities to admire in each other. These two zodiac signs come together to form a rather highbrow relationship, with Virgo bringing intellectual vigor, and Taurus bringing an artistic, showy flair.",
      compatibility: "97%",
    },
    {
      name1: "Taurus",
      name2: "Libra",
      description:
        "have a love of beauty, luxury, love and romance. Libra in particular is keen on balance; both partners have charming personalities and desire harmony in their personal relationships.",
      compatibility: "95%",
    },
    {
      name1: "Taurus",
      name2: "Scorpius",
      description:
        "have great relationships. A Scorpio-Taurus pairing is a classic case of opposites attract, and most of the time, the differences between these two can help bring balance to the relationship.",
      compatibility: "98%",
    },
    {
      name1: "Taurus",
      name2: "Sagittarius",
      description:
        "is an all or nothing relationship. The fiery spirits of both personalities can lead to an incredibly strong relationship with a starkly unique perspective on the world.",
      compatibility: "93%",
    },
    {
      name1: "Taurus",
      name2: "Capricorn",
      description:
        "have their differences. Capricorns view their own industriousness differently, with Taurus existing in a constant state of self-congratulation for all that they've built, and Capricorn hand-wringing over small mistakes, past failures, and the potential for future fiascos. However, these differences balance each other out and can lead to a blooming relationship.",
      compatibility: "96%",
    },
    {
      name1: "Taurus",
      name2: "Aquarius",
      description:
        "have an interesting dynamic. The Aquarius' rebel-without-a-cause type who will naturally fit into Taurus's structured mold. They will bring out the differences in each other and can lead to a blossoming relationship.",
      compatibility: "95%",
    },
    {
      name1: "Taurus",
      name2: "Pisces",
      description:
        "have the ablilty help each other in various ways. Pisces, whose emotional depth can help Taurus open up and explore their own hidden emotions. These two are well-suited for physical intimacy and happiness at home, sharing sensuality, creativity, and an enthusiasm for intellectual discussions. ",
      compatibility: "93%",
    },

    {
      name1: "Gemini",
      name2: "Gemini",
      description:
        "have a dualistic nature and tendency to switch moods at the spur of the moment, being able to understand one another better than anyone else. Constant mental stimulation, being able to switch up everything from sex positions to rules around the relationship, and both people feeling like they have free rein to be themselves unconditionally are integral to fireworks in this match-up. ",
      compatibility: "95%",
    },
    {
      name1: "Gemini",
      name2: "Cancer",
      description:
        "have immense energy. Cancer, the fourth sign of the zodiac and the cardinal water sign, is semisextile, or one sign apart, from Gemini, which can make for great energy. The sentimental Crab needs to feel emotionally secure and attached to a relationship. Cancer leads with their heart, while Gemini follows their merry mind.",
      compatibility: "97%",
    },
    {
      name1: "Gemini",
      name2: "Leo",
      description:
        "are a good pair. Leo, the fifth sign of the zodiac, and the fixed fire sign are sextile, or two signs apart, from Gemini, making for a friendly, easygoing pairing. The proud and playful Lion tends to be optimistic, buoyant, sunny, and a lover of life — much like Gemini. They also don't have a problem roaring about their needs and desires, which can be music to the ears of the information-loving Twins.",
      compatibility: "99%",
    },
    {
      name1: "Gemini",
      name2: "Virgo",
      description:
        "work well togther. Virgo, the sixth sign of the zodiac and the mutable earth sign, is square, or three signs apart, from Gemini, which is generally considered a good angle. Sharing mutability, both Gemini and Virgo are adaptable but also indecisive, but this not a bad thing. This joint nature can lead to a strong relationship.",
      compatibility: "95%",
    },
    {
      name1: "Gemini",
      name2: "Libra",
      description:
        "are ideal. Libra, the seventh sign of the zodiac and the cardinal air sign, is trine, or four signs apart from Gemini, which is one of the most harmonious angles regarding astrological compatibility. Both super-social air signs, Libra innately understands what Gemini needs to feel centered: mentally-stimulating conversation, connecting with others, and sharing vibrant ideas.",
      compatibility: "93%",
    },
    {
      name1: "Gemini",
      name2: "Scorpius",
      description:
        "work like a charm. Scorpius,  the eighth sign of the zodiac and the fixed water sign, is quincunx, or five signs apart from Gemini, which is a good angle for compatibility. The Gemini will be head over heels in love with the Scorpius, with the ability to find common ground, emotional connection, and a common loving style.",
      compatibility: "96%",
    },
    {
      name1: "Gemini",
      name2: "Sagittarius",
      description:
        "are opposites. Sagittarius, the ninth sign of the zodiac, and the mutable fire sign are opposite, or six signs apart from Gemini. We love to say that opposites attract, and they do, especially when it comes to this naturally free-spirited, adventure-loving pair.",
      compatibility: "97%",
    },
    {
      name1: "Gemini",
      name2: "Capricon",
      description:
        "are opposites. Capricorn, the tenth sign of the zodiac and the cardinal earth sign, is quincunx, or five signs apart from Gemini, which means these two don't have all that much in common. Capricorn, ruled by taskmaster Saturn and symbolized by the Goat, is all about boundaries and structures, working slowly and steadily up the mountain they've decided will bring them the recognition they deserve. Comparitevly, Gemini work on a whim and must embrace each others' perspectives.",
      compatibility: "93%",
    },
    {
      name1: "Gemini",
      name2: "Aquarius",
      description:
        "are a very natural pairing. Aquarius, the eleventh sign of the zodiac and the fixed air sign, is trine, or four signs apart from Gemini. This is one of the most natural pairings you can imagine, as both are humanitarian, social, and mentally charged.",
      compatibility: "91%",
    },
    {
      name1: "Gemini",
      name2: "Pisces",
      description:
        "are a natural pair. Pisces, the twelfth sign of the zodiac and mutable water sign, is square, or three signs apart from Gemini. Because they're both mutable — adaptable and indecisive — the Fish and the Twins might struggle to make up their minds about everything, except when it comes to their relationship. They are committed and will work hard to make the relationship work.",
      compatibility: "99%",
    },

    {
      name1: "Cancer",
      name2: "Cancer",
      description:
        "work well. Two Cancers, each wired to take care of everyone around them and to pour their hearts into their most meaningful bonds, can create a blissful, homey, cozy existence with one another. They'll endlessly show up for one another, prioritizing love and family and mutual support. And they're both quick to defend one another from any pain or hurt that could be inflicted by the outside world. ",
      compatibility: "98%",
    },
    {
      name1: "Cancer",
      name2: "Leo",
      description:
        "are an example of opposite attraction. Leo, the fifth sign of the zodiac and the fixed fire sign, is semisextile, or one sign apart, from Cancer, making for some bumpiness stemming from differing views and priorities. The dynamic, spotlight-loving, sun-ruled Lion is pretty much perpetually optimistic and confident, preferring to see the sunny side of life while intuitive, sensitive, and moon-ruled Crabs not only see but feel all the shades of happiness, sadness, and everything in between.",
      compatibility: "97%",
    },
    {
      name1: "Cancer",
      name2: "Virgo",
      description:
        "are full of potential. Virgo, the sixth sign of the zodiac and the mutable earth sign, is sextile, or two signs apart, from Cancer, which makes for a natural, harmonious connection. Both Cancer and Virgo are sensitive, service-oriented caregivers who are happiest when they're giving to others. They're both equally motivated to turn big-picture dreams into a reality and enjoy being the shoulder that the other one leans on while they're striving toward their end game.",
      compatibility: "96%",
    },
    {
      name1: "Cancer",
      name2: "Libra",
      description:
        "are complicated. Libra, the seventh sign of the zodiac and the cardinal air sign, is square, or three signs apart from Cancer, which can be a potentially activating angle. Both cardinal signs adore companionship, creating a beautiful home life, and all the pleasures and joys that come with having a partner.",
      compatibility: "96%",
    },
    {
      name1: "Cancer",
      name2: "Scorpius",
      description:
        "have a good outlook. Scorpio, the eighth sign of the zodiac and the fixed water sign, is trine, or four signs apart from Cancer, which sets the stage for one of the most natural, pleasurable, well-matched pairings in the zodiac. Both are sensitive, intuitive, even slightly psychic water signs who put family first and have no problem swimming in the depths of all of their feelings.",
      compatibility: "92%",
    },
    {
      name1: "Cancer",
      name2: "Sagittarius",
      description:
        "can work well together. Sagittarius, the ninth sign of the zodiac and the mutable fire sign, is quincunx, or five signs apart from Cancer, which speaks to a great match. While both signs are spiritual and find comfort in rituals and discussing what they believe in, Sag is free-spirited while Cancer needs consistency, loyalty, and dependability to feel secure. These differences makes for a more lively and blossoming relationship.",
      compatibility: "91%",
    },
    {
      name1: "Cancer",
      name2: "Capricorn",
      description:
        "are highly compatible. Capricorn, the tenth sign of the zodiac and the cardinal earth sign, is opposite, or six signs apart from Cancer. The Goat and the Crab can balance one another out — or drive each other up a wall. Ruled by taskmaster Saturn, Cap's cool, serious pragmatism lends itself to their ultimate goal: climbing up that mountain and achieving their greatest aspirations one step at a time. Cancer, on the other hand, tends to let emotion fuel their aspirations and their action. But both are interested in putting in the work to create a lasting, secure partnership, so if they are equally invested, they'll find common ground.",
      compatibility: "95%",
    },
    {
      name1: "Cancer",
      name2: "Aquarius",
      description:
        "are meant to be. Aquarius, the eleventh sign of the zodiac and the fixed air sign, is quincunx, or five signs apart from Cancer, making for good potential. Ruled by revolutionary Uranus, airy Aquarius is aloof, cool, and future-minded, preferring to embrace rational thought over emotions, while Cancer is rarely going to set aside how they intuitively feel in order to use just their head. This is a classic example of opposite attraction and can lead to a strong relationship.",
      compatibility: "93%",
    },
    {
      name1: "Cancer",
      name2: "Pisces",
      description:
        "have high compatibility. Pisces, the twelfth sign of the zodiac and mutable water sign, is trine, or four signs apart from Cancer, making for a natural, loving fit. Ruled by dreamy Neptune, the Fish is deeply spiritual, empathic, artistic, and emotional. As an initiating cardinal sign, Cancer can come up with ambitious game plans for making less decisive Pisces' dreams come true. And Pisces can teach Cancer to channel their at times overwhelming emotions into a healthy outlet, like art, music, dance, theater, or creative lovemaking.",
      compatibility: "97%",
    },

    {
      name1: "Leo",
      name2: "Leo",
      description:
        "are an ideal match. Believe it or not, one of Leo's most compatible signs is ... another Leo! Two Leos, each interested in perpetually nurturing and adoring their loved ones with their special brand of sparkly, sunny warmth, can forge a sexy and deeply romantic bond with one another. This passionate pair likely speaks the same love language, treating one another to luxurious, romantic getaways, gasp-worthy date nights, and loads of words of affirmation.",
      compatibility: "99%",
    },
    {
      name1: "Leo",
      name2: "Virgo",
      description:
        "have an innate passion for each other. Virgo, the sixth sign of the zodiac and the mutable earth sign, is semisextile, or one sign apart, from Leo, which might make for a bit of bumpiness because they have slightly different perspectives and priorities. While action-oriented Leo prefers to prowl, roar, and stalk down any objective in a dynamic, take-charge way, mutable, Mercury-ruled Virgo is all about researching and gathering the most pertinent details before making a move. This change of pace can help the Leo become more patient and can lead to a prosperous relationship.",
      compatibility: "94%",
    },
    {
      name1: "Leo",
      name2: "Libra",
      description:
        "are an ideal match. Libra, the seventh sign of the zodiac, and the cardinal air sign are sextile, or two signs apart from Leo, which sets up a sweet, harmonious bond. Both are head over heels for romance and seeing and being seen.",
      compatibility: "96%",
    },
    {
      name1: "Leo",
      name2: "Scorpius",
      description:
        "have intense relationships. Scorpio, the eighth sign of the zodiac and the fixed water sign, is square, or three signs apart from Leo, which makes for an intense, dramatic, and possibly challenging pairing. Both magnetic signs are wired to take charge and are extremely aware of their inner power, so this can result in a powerful intertwining of personalities that can create a lustful relationship.",
      compatibility: "96%",
    },
    {
      name1: "Leo",
      name2: "Sagittarius",
      description:
        "have symbiotic relationships. Sagittarius, the ninth sign of the zodiac and the mutable fire sign, is trine, or four signs apart from Leo, making for a natural, easygoing, and symbiotic match. Buoyant, joyful, and driven, both signs want to get out and make the most of the world around them. They'll find broadening their horizons together feels truly fulfilling and serves to bolster their bond.",
      compatibility: "91%",
    },
    {
      name1: "Leo",
      name2: "Capricorn",
      description:
        "are a match made in heaven. Capricorn, the tenth sign of the zodiac and the cardinal earth sign, is quincunx, or five signs apart from Leo, making for a strong connection. The Goat and the Lion are both interested in leading the charge, and can be a strong and willful couple that faces the world with strength.",
      compatibility: "95%",
    },
    {
      name1: "Leo",
      name2: "Aquarius",
      description:
        "are a very unproblematic pair. Aquarius, the eleventh sign of the zodiac, and the fixed air sign are opposite, or six signs apart from Leo, setting up a yin-yang match. Ruled by revolutionary Uranus, airy Aquarius can be distant, chilly, progressive, and platonic-minded, wired to prioritize rational thought over feelings, while Leo exudes warmth, tunes into their heart's wishes, and dreams of cinematic-level romance. This difference can lead to a mellowing out of the Leo and a spark for the Aquarius, leading to a hot romance and blissful relationship.",
      compatibility: "91%",
    },
    {
      name1: "Leo",
      name2: "Pisces",
      description:
        "have a common ground, relationship wise. Pisces, the twelfth sign of the zodiac and mutable water sign, is quincunx, or five signs apart from Leo. This means that the two signs are highly in sync and relationship problems will be few and far between.",
      compatibility: "93%",
    },

    {
      name1: "Virgo",
      name2: "Virgo",
      description:
        "are meant for each other. A Virgo-Virgo pairing serves double the Mercury-ruled, detail-oriented, research-savvy energy, which can be a total boon or a buzzkill for this pairing. Virgos tend to be their worst critics, but being with another Virgo that can see the good in them can help to create a productive relationship.",
      compatibility: "93%",
    },
    {
      name1: "Virgo",
      name2: "Libra",
      description:
        "see eye to eye. Libra, the seventh sign of the zodiac and the cardinal air sign, is semisextile, or one sign apart, from Virgo. This similarity means that Virgos and Libras do not have much trouble understanding each other.",
      compatibility: "94%",
    },
    {
      name1: "Virgo",
      name2: "Scorpius",
      description:
        "have tranquil relationships. Scorpio, the eighth sign of the zodiac and the fixed water sign, is sextile, or two signs apart, from Virgo, which can make for calm waters. Both tend to be pretty reserved, loyal deep thinkers, although Scorpio's more in their feelings — and more interested in stepping into a position of power — than heady, serviceable Virgo. But this difference can make them a duo to be reckoned with, as they'll work in a diligent, calculated way together toward their shared, ideal endgame.",
      compatibility: "95%",
    },
    {
      name1: "Virgo",
      name2: "Sagittarius",
      description:
        "can be soulmates. Sagittarius, the ninth sign of the zodiac and the mutable fire sign, is square, or three signs apart from Virgo. This is a good angle as it allows both people to be themselves and can allow each person to seek adventure with the other.",
      compatibility: "99%",
    },
    {
      name1: "Virgo",
      name2: "Capricorn",
      description:
        "can build something satisfying and lasting. Capricorn, the tenth sign of the zodiac and the cardinal earth sign, is trine, or four signs apart from Virgo, making for a natural, industrious bond. Both earth signs are wired to take care of business, and while Cap is striving toward publicly-recognized respect and achievement, Virgo is happy to handle the day-to-day details. They're equally pragmatic, hardworking, and grounded in reality, which means that together, they can build something lasting and satisfying.",
      compatibility: "99%",
    },
    {
      name1: "Virgo",
      name2: "Aquarius",
      description:
        "work together well. Aquarius, the eleventh sign of the zodiac and the fixed air sign, is quincunx, or five signs apart from Virgo, which is generally considered a rather oppurtune angle for a relationship. Together, with the large-scale thinking of Aquarius and the detail-oriented Virgo, the two can be an unstoppable team that will go far together.",
      compatibility: "93%",
    },
    {
      name1: "Virgo",
      name2: "Pisces",
      description:
        "are an example of opposite attraction. Pisces, the twelfth sign of the zodiac and mutable water sign, is opposite (or six signs apart from) Virgo, which makes for an extremely yin-yang pairing. Ruled by dreamy Neptune, the Fish is deeply spiritual, empathic, artistic, and emotional, all of which can be very inspiring — or very confusing and disorienting — to rational, grounded, and orderly Virgo. If they're willing to learn how to speak one another's language, the combo of Pisces' spiritual water and Virgo's practical earth lays down fertile ground for a bond that flourishes.",
      compatibility: "95%",
    },

    {
      name1: "Libra",
      name2: "Libra",
      description:
        "can have a beautiful relationship. The ability to be committed and make up their minds fast means that Libras will be committed and ready for a long and passionate relationship.",
      compatibility: "96%",
    },
    {
      name1: "Libra",
      name2: "Scorpius",
      description:
        "have many similarities. Scorpio, the eighth sign of the zodiac and the fixed water sign, is semisextile, or one sign apart, from Libra, which can set up a good angle for a relationship. Both value intimacy, closeness, and charm, so they absolutely can find common ground and keep a lasting and happy relationship going.",
      compatibility: "96%",
    },
    {
      name1: "Libra",
      name2: "Sagittarius",
      description:
        "have a very laid back connection. Sagittarius, the ninth sign of the zodiac and the mutable fire sign, is sextile, or two signs apart from Libra, laying the groundwork for a friendly, easygoing connection. Both Sag and Libra love being around people, entertaining (Sag is the one in front of the crowd telling jokes while Libra is making sure all the technical details are primed and pretty), and going on eye-opening adventures.",
      compatibility: "97%",
    },
    {
      name1: "Libra",
      name2: "Capricorn",
      description:
        "have strong relationships. Capricorn, the tenth sign of the zodiac and the cardinal earth sign, is square, or three signs apart from Libra, making for an activating and amazing connection. Both are natural-born initiators, so they definitely respect one another's ability to dream up and kick off big picture plans. And both enjoy being in the limelight as a result of their hard work. This unstoppable duo also has a fierce passion for love.",
      compatibility: "97%",
    },
    {
      name1: "Libra",
      name2: "Aquarius",
      description:
        "are soulmates. Aquarius, the eleventh sign of the zodiac and the fixed air sign, is trine, or four signs apart from Libra, which is thought of as the \"as good as it gets \", harmonious match. Both are people people and possess high mental energy, and they'll often come across as an influential power couple. At the same time, Libra, ruled by sweet Venus, enjoys old-fashioned romance and classic styles that could strike quirky, mainstream-loathing Aquarius, ruled by rebellious Uranus, as boring and conventional. That said, being willing to embrace one another's passions will keep this airy pair on the same page.",
      compatibility: "92%",
    },
    {
      name1: "Libra",
      name2: "Pisces",
      description:
        "are meant for each other. Pisces, the twelfth sign of the zodiac and mutable water sign, is quincunx, or five signs apart from Libra, which is generally a good angle. While Libra is a take-charge initiator, Pisces is typically passive, waiting to see which hand they're dealt. This has the opposite attraction effect and allows for a dynamic relationship.",
      compatibility: "92%",
    },

    {
      name1: "Scorpius",
      name2: "Scorpius",
      description:
        "have passionate bonds. Both are wired to let their partner in emotionally and get attached in an otherworldly, incredibly intense way, which can make for an unbreakable commitment. Two Scorps will likely create a cozy home and build a family life they're both proud of and attached to if it's a romantic pairing.",
      compatibility: "93%",
    },
    {
      name1: "Scorpius",
      name2: "Sagittarius",
      description:
        "are soulmates. Sagittarius, the ninth sign of the zodiac and the mutable fire sign, is semisextile, or one sign apart, from Scorpio, which generally makes for an amazing connection. Both love to explore, so if they can prioritize their shared passion for adventure, they can get along just fine.",
      compatibility: "98%",
    },
    {
      name1: "Scorpius",
      name2: "Capricorn",
      description:
        "have a very strong bond. Capricorn, the tenth sign of the zodiac, and the cardinal earth sign is sextile, or two signs apart from Scorpio, making for a friendly, easygoing bond. Both are determined to be recognized, to achieve, and to obtain power and influence. They have what it takes to put in hard work and be quite the power couple.",
      compatibility: "93%",
    },
    {
      name1: "Scorpius",
      name2: "Aquarius",
      description:
        "are meant for each other. Aquarius, the eleventh sign of the zodiac and the fixed air sign, is square, or three signs apart from Scorpio, which is thought of as a good angle. Because they are so different, they can also teach one another a lot about a foreign perspective.",
      compatibility: "94%",
    },
    {
      name1: "Scorpius",
      name2: "Pisces",
      description:
        "work well together. Pisces, the twelfth sign of the zodiac and mutable water sign, is trine, or four signs apart from Scorpio, which is considered the most harmonious bond forged between two signs. Both are deeply feeling, in touch with their spirituality, somewhat psychic, and up for an otherworldly, jaw-droppingly romantic relationship. ",
      compatibility: "95%",
    },

    {
      name1: "Sagittarius",
      name2: "Sagittarius",
      description:
        "are explorers. Get two Sagittarians together; they better have up-to-date passports and plenty of disposable income for travel. Similarly adventurous, philosophical, and invested in soaking up as much knowledge as possible, this is a pair that'll be perpetually in celebration mode.",
      compatibility: "92%",
    },
    {
      name1: "Sagittarius",
      name2: "Capricorn",
      description:
        "Capricorn, the tenth sign of the zodiac and the cardinal earth sign, is semisextile, or one sign apart from Sag, which can make for strength. Cap could be the business manager Sag never knew they always needed, while Sag can help Cap connect with their inner adventurer and realize that embracing life and being in the present is just as cool as working hard and striving for the future.",
      compatibility: "92%",
    },
    {
      name1: "Sagittarius",
      name2: "Aquarius",
      description:
        "get along well. Aquarius, the eleventh sign of the zodiac, and the fixed air sign is sextile, or two signs apart from Sagittarius, which makes for a friendly, organic connection. The Water Bearer prioritizes humanity, community, and what's best for everyone collectively, which can be a lovely complement to Sag's adoration of the truth and soaking up knowledge. Both prefer taking an unconventional, free-spirited path.",
      compatibility: "97%",
    },
    {
      name1: "Sagittarius",
      name2: "Pisces",
      description:
        "have lots of potential. Pisces, the twelfth sign of the zodiac and mutable water sign, is square, or three signs apart from Sag, which is a promising angle. Both are spiritually inclined and value beauty, emotion, and art. But while Pisces can be very sensitive, impressionable, and empathic to the point that they find it hard not to be deeply affected by other people's pain, Sag is proudly blunt, a bit more cerebral than in their feelings, and philosophical as opposed to emotional. This difference allows the relationship to be dymamic with each person making up for the other person.",
      compatibility: "96%",
    },

    {
      name1: "Capricorn",
      name2: "Capricorn",
      description:
        "are fierce. Talk about a power couple. Two Caps will be on a constant mission to achieve themselves and push one another further. Equally traditional, conservative, and elegant, they'll make quite the impression when they step out as a pair. Because they tend to tackle any challenge like another project — a mountain to climb — they'll be up for addressing any issues that arise in their relationships in a take-charge, step-by-step way.",
      compatibility: "98%",
    },
    {
      name1: "Capricorn",
      name2: "Aquarius",
      description:
        "Aquarius, the eleventh sign of the zodiac and the fixed air sign, is semisextile, or one sign apart from Capricorn, which makes for a great relationship. The Water Bearer prioritizes humanity, community, and what's best for everyone collectively, while Cap is a bit more focused on taking on the challenges they see along their path and sticking with a tried-and-true traditional approach, while Aquarius is all about moving in an unconventional, free-spirited direction. This difference in style leads to a dynamic, sophistocated, and multifaced relationsip",
      compatibility: "99%",
    },
    {
      name1: "Capricorn",
      name2: "Pisces",
      description:
        "make for good couples. Pisces, the twelfth sign of the zodiac, and the mutable water sign is sextile, or two signs apart from Capricorn, which generally makes for a harmonious, friendly bond. Both signs are committed to showing up for the people they care about in a traditional, heartfelt way. While the Fish is a dreamer who prefers escapism over reality and Cap is all about taking slow, steady, pragmatic steps to reach their endgame, there's a lot they can learn from one another. Pisces can help Cap hone their artistic eye while Cap gives Pisces the tools to turn their fantasies into reality.",
      compatibility: "91%",
    },

    {
      name1: "Aquarius",
      name2: "Aquarius",
      description:
        "are likely to be tight with each other. The easygoing nature leads to an easygoing and healthy relationship with lots of room for growth and communication from both sides.",
      compatibility: "93%",
    },
    {
      name1: "Aquarius",
      name2: "Pisces",
      description:
        "are meant for each other. Aquarius is semi-sextile, or one sign apart, from Pisces, the mutable water sign, which makes for a good relationship. Both are humanitarians and endlessly imaginative with a proactivity that means that both are able to achieve their goals and grow together.",
      compatibility: "94%",
    },

    {
      name1: "Pisces",
      name2: "Pisces",
      description:
        "are meant for each other. Two spiritual, dreamy Pisces might have a blast escaping from everyday reality by letting their super-active imaginations wander. They might be film (which is ruled by Neptune) or theater writing partners or cheering on one another's other artistic pursuits. They'll also show up for one another emotionally in a way that no other sign might be able to.",
      compatibility: "92%",
    },
  ]);

  const [signs, setSigns] = useState([
    {
      name: "Aries",
      pic: "♈",
    },
    {
      name: "Taurus",
      pic: "♉",
    },
    {
      name: "Gemini",
      pic: "♊",
    },
    {
      name: "Cancer",
      pic: "♋",
    },
    {
      name: "Leo",
      pic: "♌",
    },
    {
      name: "Virgo",
      pic: "♍",
    },
    {
      name: "Libra",
      pic: "♎",
    },
    {
      name: "Scorpius",
      pic: "♏",
    },
    {
      name: "Sagittarius",
      pic: "♐",
    },
    {
      name: "Capricorn",
      pic: "♑",
    },
    {
      name: "Aquarius",
      pic: "♒",
    },
    {
      name: "Pisces",
      pic: "♓",
    },
  ]);

  function findUserPic(name) {
    signs.forEach((sign) => {
      if (name === sign.name) {
        setUserImage(sign.pic);
      }
    });
  }

  function findPartnerPic(name) {
    signs.forEach((sign) => {
      if (name === sign.name) {
        setPartnerImage(sign.pic);
      }
    });
  }

  function findDescription({ userName, partnerName }) {
    descriptions.forEach((description) => {
      if (description.name1 === userName) {
        if (description.name2 === partnerName) {
          setDescription(description.description);
          setCompatibility(description.compatibility);
        }
      }
    });

    descriptions.forEach((description) => {
      if (description.name2 === userName) {
        if (description.name1 === partnerName) {
          setDescription(description.description);
          setCompatibility(description.compatibility);
        }
      }
    });
  }

  return (
    <signContext.Provider
      value={{
        signs,
        findUserPic,
        findPartnerPic,
        userImage,
        partnerImage,
        description,
        findDescription,
        compatibility,
      }}
    >
      {children}
    </signContext.Provider>
  );
};
