/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

'use strict';

/**
 * Define Themes
 *
 * area: area, one of (frontend|adminhtml|doc),
 * name: theme name in format Vendor/theme-name,
 * locale: locale,
 * files: [
 * 'css/styles-m',
 * 'css/styles-l'
 * ],
 * dsl: dynamic stylesheet language (less|sass)
 *
 */
module.exports = {
    blank: {
        area: 'frontend',
        name: 'Magento/blank',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    },
    luma: {
        area: 'frontend',
        name: 'Magento/luma',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    },
    backend: {
        area: 'adminhtml',
        name: 'Magento/backend',
        locale: 'en_US',
        files: [
            'css/styles-old',
            'css/styles'
        ],
        dsl: 'less'
    },
    deepbluemedspa: {
      area: 'frontend',
      name: 'Infortis/deepbluemedspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    seasmedspa: {
      area: 'frontend',
      name: 'Infortis/seasmedspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    swanndermatologyesthetics: {
      area: 'frontend',
      name: 'Infortis/swanndermatologyesthetics',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    aboutfacehawaii: {
      area: 'frontend',
      name: 'Infortis/aboutfacehawaii',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    mcguinessdermatology: {
      area: 'frontend',
      name: 'Infortis/mcguinessdermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    pattiflintmd: {
      area: 'frontend',
      name: 'Infortis/pattiflintmd',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    demostore1: {
      area: 'frontend',
      name: 'Infortis/demostore1',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    demostore2: {
      area: 'frontend',
      name: 'Infortis/demostore2',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    demostore3: {
      area: 'frontend',
      name: 'Infortis/demostore3',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    demostore4: {
      area: 'frontend',
      name: 'Infortis/demostore4',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    demostore5: {
      area: 'frontend',
      name: 'Infortis/demostore5',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    demostore6: {
      area: 'frontend',
      name: 'Infortis/demostore6',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    skincarephysicians: {
      area: 'frontend',
      name: 'Infortis/skincarephysicians',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    daltonderm: {
      area: 'frontend',
      name: 'Infortis/daltonderm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    rochesterlasercenter: {
      area: 'frontend',
      name: 'Infortis/rochesterlasercenter',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    centraldermcenter: {
      area: 'frontend',
      name: 'Infortis/centraldermcenter',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    luxhhi: {
      area: 'frontend',
      name: 'Infortis/luxhhi',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    terezakisgrieshaberdermatology: {
      area: 'frontend',
      name: 'Infortis/terezakisgrieshaberdermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    revivemedicalspa: {
      area: 'frontend',
      name: 'Infortis/revivemedicalspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    withdrnicole: {
      area: 'frontend',
      name: 'Infortis/withdrnicole',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    zlmedspa: {
      area: 'frontend',
      name: 'Infortis/zlmedspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    alabamaderm: {
      area: 'frontend',
      name: 'Infortis/alabamaderm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    baweightspa: {
      area: 'frontend',
      name: 'Infortis/baweightspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    weloveskin: {
      area: 'frontend',
      name: 'Infortis/weloveskin',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    agelessmed: {
      area: 'frontend',
      name: 'Infortis/agelessmed',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    northtexasplasticsurgery: {
      area: 'frontend',
      name: 'Infortis/northtexasplasticsurgery',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    laskyskincenter: {
      area: 'frontend',
      name: 'Infortis/laskyskincenter',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    bellabodymedicalspa: {
      area: 'frontend',
      name: 'Infortis/bellabodymedicalspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    mirabilemd: {
      area: 'frontend',
      name: 'Infortis/mirabilemd',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    shellplasticsurgery: {
      area: 'frontend',
      name: 'Infortis/shellplasticsurgery',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    iorioplasticsurgery: {
      area: 'frontend',
      name: 'Infortis/iorioplasticsurgery',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    soinederm: {
      area: 'frontend',
      name: 'Infortis/soinederm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    cffbr: {
      area: 'frontend',
      name: 'Infortis/cffbr',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    ppsclt: {
      area: 'frontend',
      name: 'Infortis/ppsclt',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    southsidedermatology: {
      area: 'frontend',
      name: 'Infortis/southsidedermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    pierreskincare: {
      area: 'frontend',
      name: 'Infortis/pierreskincare',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    buinewiczplasticsurgery: {
      area: 'frontend',
      name: 'Infortis/buinewiczplasticsurgery',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    summitskinaesthetics: {
      area: 'frontend',
      name: 'Infortis/summitskinaesthetics',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    edinaskincare: {
      area: 'frontend',
      name: 'Infortis/edinaskincare',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    nuamedspa: {
      area: 'frontend',
      name: 'Infortis/nuamedspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    hurwitzcenter: {
      area: 'frontend',
      name: 'Infortis/hurwitzcenter',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    bitarinstitute: {
      area: 'frontend',
      name: 'Infortis/bitarinstitute',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    walkindermatology: {
      area: 'frontend',
      name: 'Infortis/walkindermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    mirabellamedspa: {
      area: 'frontend',
      name: 'Infortis/mirabellamedspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    tribecaparkdermatology: {
      area: 'frontend',
      name: 'Infortis/tribecaparkdermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    tulsasurgicalarts: {
      area: 'frontend',
      name: 'Infortis/tulsasurgicalarts',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    leeplasticsurgery: {
      area: 'frontend',
      name: 'Infortis/leeplasticsurgery',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    skinwellnessphysicians: {
      area: 'frontend',
      name: 'Infortis/skinwellnessphysicians',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    reneuxmeddayspa: {
      area: 'frontend',
      name: 'Infortis/reneuxmeddayspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    drdroppelt: {
      area: 'frontend',
      name: 'Infortis/drdroppelt',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    gallaherplasticsurgery: {
      area: 'frontend',
      name: 'Infortis/gallaherplasticsurgery',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    matsudadermatology: {
      area: 'frontend',
      name: 'Infortis/matsudadermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    advanceddermatologymd: {
      area: 'frontend',
      name: 'Infortis/advanceddermatologymd',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    absolutedermva: {
      area: 'frontend',
      name: 'Infortis/absolutedermva',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    thedocspa: {
      area: 'frontend',
      name: 'Infortis/thedocspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    elanaesthetics: {
      area: 'frontend',
      name: 'Infortis/elanaesthetics',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    antiageinstitute: {
      area: 'frontend',
      name: 'Infortis/antiageinstitute',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    simplyskinmedspa: {
      area: 'frontend',
      name: 'Infortis/simplyskinmedspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    kuflikderm: {
      area: 'frontend',
      name: 'Infortis/kuflikderm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    sbplasticsurgery: {
      area: 'frontend',
      name: 'Infortis/sbplasticsurgery',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    truemedspalakeland: {
      area: 'frontend',
      name: 'Infortis/truemedspalakeland',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    pinskiderm: {
      area: 'frontend',
      name: 'Infortis/pinskiderm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    thedermgrouppartners: {
      area: 'frontend',
      name: 'Infortis/thedermgrouppartners',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    rejuvenaterx: {
      area: 'frontend',
      name: 'Infortis/rejuvenaterx',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    derminstitutemd: {
      area: 'frontend',
      name: 'Infortis/derminstitutemd',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    totalglow: {
      area: 'frontend',
      name: 'Infortis/totalglow',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    northdallasderm: {
      area: 'frontend',
      name: 'Infortis/northdallasderm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    notjustfacesmedical: {
      area: 'frontend',
      name: 'Infortis/notjustfacesmedical',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    forefrontdermatology: {
      area: 'frontend',
      name: 'Infortis/forefrontdermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    bayoucitydermatology: {
      area: 'frontend',
      name: 'Infortis/bayoucitydermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    evolvmedicalaesthetics: {
      area: 'frontend',
      name: 'Infortis/evolvmedicalaesthetics',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    aquamedicalspa: {
      area: 'frontend',
      name: 'Infortis/aquamedicalspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    mirrormirrorhouston: {
      area: 'frontend',
      name: 'Infortis/mirrormirrorhouston',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    physiciansbeautygroup: {
        area: 'frontend',
        name: 'Infortis/physiciansbeautygroup',
        locale: 'en_US',
        files: [
          'css/styles-m',
          'css/styles-l'
        ],
        dsl: 'less'
  },
    lepetitspacharlotte: {
      area: 'frontend',
      name: 'Infortis/lepetitspacharlotte',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    nwgadermatology: {
      area: 'frontend',
      name: 'Infortis/nwgadermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    railanmd: {
      area: 'frontend',
      name: 'Infortis/railanmd',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    surgeryvp: {
      area: 'frontend',
      name: 'Infortis/surgeryvp',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    drnowak: {
      area: 'frontend',
      name: 'Infortis/drnowak',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    skinsolutionsdermatology: {
      area: 'frontend',
      name: 'Infortis/skinsolutionsdermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    kevinwelchmd: {
      area: 'frontend',
      name: 'Infortis/kevinwelchmd',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    deuamerica: {
      area: 'frontend',
      name: 'Infortis/deuamerica',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    southlakedermatology: {
      area: 'frontend',
      name: 'Infortis/southlakedermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    dermcarestl: {
      area: 'frontend',
      name: 'Infortis/dermcarestl',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    dallasassocderm: {
      area: 'frontend',
      name: 'Infortis/dallasassocderm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    northtexasderm: {
      area: 'frontend',
      name: 'Infortis/northtexasderm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    culturamed: {
      area: 'frontend',
      name: 'Infortis/culturamed',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    dallasdermatology: {
      area: 'frontend',
      name: 'Infortis/dallasdermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    madskin: {
      area: 'frontend',
      name: 'Infortis/madskin',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    coolsculptingalabama: {
      area: 'frontend',
      name: 'Infortis/coolsculptingalabama',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    coolsculptingwoodstock: {
      area: 'frontend',
      name: 'Infortis/coolsculptingwoodstock',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    anewyouskinbodyclinic: {
      area: 'frontend',
      name: 'Infortis/anewyouskinbodyclinic',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    southeasterndermatology: {
      area: 'frontend',
      name: 'Infortis/southeasterndermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    virginiamohs: {
      area: 'frontend',
      name: 'Infortis/virginiamohs',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    skyedermatology: {
      area: 'frontend',
      name: 'Infortis/skyedermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    invernessderm: {
      area: 'frontend',
      name: 'Infortis/invernessderm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    dermatologyofeasttexas: {
      area: 'frontend',
      name: 'Infortis/dermatologyofeasttexas',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    ctdermgroup: {
      area: 'frontend',
      name: 'Infortis/ctdermgroup',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    californiaskininstitute: {
      area: 'frontend',
      name: 'Infortis/californiaskininstitute',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    renewumedispa: {
      area: 'frontend',
      name: 'Infortis/renewumedispa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    labaestheticsnew: {
      area: 'frontend',
      name: 'Infortis/labaestheticsnew',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    ochsdermatology: {
      area: 'frontend',
      name: 'Infortis/ochsdermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    patrickbasilemd: {
      area: 'frontend',
      name: 'Infortis/patrickbasilemd',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    shadesvalleyderm: {
      area: 'frontend',
      name: 'Infortis/shadesvalleyderm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    bellevietoday: {
      area: 'frontend',
      name: 'Infortis/bellevietoday',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    georgiadermatologypartners: {
      area: 'frontend',
      name: 'Infortis/georgiadermatologypartners',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    skinallergycenter: {
      area: 'frontend',
      name: 'Infortis/skinallergycenter',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    naderm: {
      area: 'frontend',
      name: 'Infortis/naderm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    chadwellfacialplastics: {
      area: 'frontend',
      name: 'Infortis/chadwellfacialplastics',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    lightrx: {
      area: 'frontend',
      name: 'Infortis/lightrx',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    acaciaspa: {
      area: 'frontend',
      name: 'Infortis/acaciaspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    rashidps: {
      area: 'frontend',
      name: 'Infortis/rashidps',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    skinandcomiami: {
      area: 'frontend',
      name: 'Infortis/skinandcomiami',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    aribamedicalspa: {
      area: 'frontend',
      name: 'Infortis/aribamedicalspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    innerimage: {
      area: 'frontend',
      name: 'Infortis/innerimage',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    hsskin: {
      area: 'frontend',
      name: 'Infortis/hsskin',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    dermspecpa: {
      area: 'frontend',
      name: 'Infortis/dermspecpa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    politisplasticsurgery: {
      area: 'frontend',
      name: 'Infortis/politisplasticsurgery',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    skinfinitesolutions: {
      area: 'frontend',
      name: 'Infortis/skinfinitesolutions',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    austinpainwellness: {
      area: 'frontend',
      name: 'Infortis/austinpainwellness',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    burnettplasticsurgery: {
      area: 'frontend',
      name: 'Infortis/burnettplasticsurgery',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    wpplasticsurgery: {
      area: 'frontend',
      name: 'Infortis/wpplasticsurgery',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    spaaesthetica: {
      area: 'frontend',
      name: 'Infortis/spaaesthetica',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    greerdermatology: {
      area: 'frontend',
      name: 'Infortis/greerdermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    advancedaestheticsmedispa: {
      area: 'frontend',
      name: 'Infortis/advancedaestheticsmedispa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    radiantreflectionsms: {
      area: 'frontend',
      name: 'Infortis/radiantreflectionsms',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    goldenhealthcenter: {
      area: 'frontend',
      name: 'Infortis/goldenhealthcenter',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    skinlabcsipd: {
      area: 'frontend',
      name: 'Infortis/skinlabcsipd',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    thelifestylecenter: {
      area: 'frontend',
      name: 'Infortis/thelifestylecenter',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    keylaserinstitute: {
      area: 'frontend',
      name: 'Infortis/keylaserinstitute',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    robertandrewsmedical: {
      area: 'frontend',
      name: 'Infortis/robertandrewsmedical',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    restondermatology: {
      area: 'frontend',
      name: 'Infortis/restondermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    infinitymedspa: {
      area: 'frontend',
      name: 'Infortis/infinitymedspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    gardensdermatology: {
      area: 'frontend',
      name: 'Infortis/gardensdermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    plazamedspa: {
      area: 'frontend',
      name: 'Infortis/plazamedspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    skincarenyc: {
      area: 'frontend',
      name: 'Infortis/skincarenyc',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    drchhatre: {
      area: 'frontend',
      name: 'Infortis/drchhatre',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    usdermatologypartners: {
      area: 'frontend',
      name: 'Infortis/usdermatologypartners',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    marinaplasticsurgery: {
      area: 'frontend',
      name: 'Infortis/marinaplasticsurgery',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    medspaatseenaone: {
      area: 'frontend',
      name: 'Infortis/medspaatseenaone',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    englewoodcosmeticmedicalspa: {
      area: 'frontend',
      name: 'Infortis/englewoodcosmeticmedicalspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    bellavitanorthandover: {
      area: 'frontend',
      name: 'Infortis/bellavitanorthandover',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    marvelcosmeticspringhill: {
      area: 'frontend',
      name: 'Infortis/marvelcosmeticspringhill',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    somasou: {
      area: 'frontend',
      name: 'Infortis/somasou',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    commonwealthplastics: {
      area: 'frontend',
      name: 'Infortis/commonwealthplastics',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    rosevillederm: {
      area: 'frontend',
      name: 'Infortis/rosevillederm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    livingproofconsulting: {
      area: 'frontend',
      name: 'Infortis/livingproofconsulting',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    glamrusmedspa: {
      area: 'frontend',
      name: 'Infortis/glamrusmedspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    doctorangelchik: {
      area: 'frontend',
      name: 'Infortis/doctorangelchik',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    revivology: {
      area: 'frontend',
      name: 'Infortis/revivology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    serenitywomenscare: {
      area: 'frontend',
      name: 'Infortis/serenitywomenscare',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    rewindmedicalsolutions: {
      area: 'frontend',
      name: 'Infortis/rewindmedicalsolutions',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    lockhartmatterdermatology: {
      area: 'frontend',
      name: 'Infortis/lockhartmatterdermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    drsmita: {
      area: 'frontend',
      name: 'Infortis/drsmita',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    thedejavumedspaandsalon: {
      area: 'frontend',
      name: 'Infortis/thedejavumedspaandsalon',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    keitx: {
      area: 'frontend',
      name: 'Infortis/keitx',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    radiancedc: {
      area: 'frontend',
      name: 'Infortis/radiancedc',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    lvbodysculpting: {
      area: 'frontend',
      name: 'Infortis/lvbodysculpting',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    hshkx: {
      area: 'frontend',
      name: 'Infortis/hshkx',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    gleauxaesthetics: {
      area: 'frontend',
      name: 'Infortis/gleauxaesthetics',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    plasticsandderm: {
      area: 'frontend',
      name: 'Infortis/plasticsandderm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    kindredhairandskin: {
      area: 'frontend',
      name: 'Infortis/kindredhairandskin',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    petromd: {
      area: 'frontend',
      name: 'Infortis/petromd',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    echenmd: {
      area: 'frontend',
      name: 'Infortis/echenmd',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    aglowdermatology: {
      area: 'frontend',
      name: 'Infortis/aglowdermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    drfarole: {
      area: 'frontend',
      name: 'Infortis/drfarole',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    amyblewismd: {
      area: 'frontend',
      name: 'Infortis/amyblewismd',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    fwderm: {
      area: 'frontend',
      name: 'Infortis/fwderm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    cumberlandderm: {
      area: 'frontend',
      name: 'Infortis/cumberlandderm',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    agelessbeautyhasarrived: {
      area: 'frontend',
      name: 'Infortis/agelessbeautyhasarrived',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    visojuve: {
      area: 'frontend',
      name: 'Infortis/visojuve',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    truskin: {
      area: 'frontend',
      name: 'Infortis/truskin',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    advanceddermatologypc: {
      area: 'frontend',
      name: 'Infortis/advanceddermatologypc',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    wakeupbeautifulspa: {
      area: 'frontend',
      name: 'Infortis/wakeupbeautifulspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    lineoutaesthetics: {
      area: 'frontend',
      name: 'Infortis/lineoutaesthetics',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    coolspa: {
      area: 'frontend',
      name: 'Infortis/coolspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    drglennlyle: {
      area: 'frontend',
      name: 'Infortis/drglennlyle',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    rejuvmedspaorlando: {
      area: 'frontend',
      name: 'Infortis/rejuvmedspaorlando',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    divinitymedspa: {
      area: 'frontend',
      name: 'Infortis/divinitymedspa',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    glowstpete: {
      area: 'frontend',
      name: 'Infortis/glowstpete',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    renuance: {
      area: 'frontend',
      name: 'Infortis/renuance',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    plasticsurgerynorthernvirginia: {
      area: 'frontend',
      name: 'Infortis/plasticsurgerynorthernvirginia',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    mspremierplasticsurgery: {
      area: 'frontend',
      name: 'Infortis/mspremierplasticsurgery',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    carolinaskin: {
      area: 'frontend',
      name: 'Infortis/carolinaskin',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    abovebeyondwellness: {
      area: 'frontend',
      name: 'Infortis/abovebeyondwellness',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    mckinneydentist: {
      area: 'frontend',
      name: 'Infortis/mckinneydentist',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    skinsecrets: {
      area: 'frontend',
      name: 'Infortis/skinsecrets',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    visagedermatology: {
      area: 'frontend',
      name: 'Infortis/visagedermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    harrishealth: {
      area: 'frontend',
      name: 'Infortis/harrishealth',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    regionaldermatology: {
      area: 'frontend',
      name: 'Infortis/regionaldermatology',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    uio: {
      area: 'frontend',
      name: 'Infortis/uio',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  },
    business: {
      area: 'frontend',
      name: 'Infortis/business',
      locale: 'en_US',
      files: [
        'css/styles-m',
        'css/styles-l'
      ],
      dsl: 'less'
  }
};
