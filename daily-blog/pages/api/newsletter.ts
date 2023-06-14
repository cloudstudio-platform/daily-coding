import { NewsletterAPI } from 'pliny/newsletter'
import siteMetadata from '@/data/siteMetadata'

export default NewsletterAPI({
  provider: siteMetadata.newsletter.provider,
})
