import CMS from 'netlify-cms'

import SectionsPreview from './preview-templates/SectionsPreview'

CMS.registerPreviewTemplate('gallery', SectionsPreview)
CMS.registerPreviewTemplate('info', SectionsPreview)
CMS.registerPreviewTemplate('cook', SectionsPreview)
CMS.registerPreviewTemplate('build', SectionsPreview)