import wrapAnsi from 'wrap-ansi'
import chalk from 'chalk'

import header from './header'
import optionPad from './option-pad'

export const nettestHelp = (meta, nettestName, options) => (`
  ${header}

  ${chalk.bold(meta.name)}

  ${wrapAnsi(meta.shortDescription, 40)}

  ${chalk.dim('Usage:')}

    ooni nettest [options] ${nettestName} <url>

  ${chalk.dim('Options:')}

    ${options.map((opt) => optionPad(opt, 80)).join('\n    ')}

`)

export default nettestHelp
