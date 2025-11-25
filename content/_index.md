---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
 
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  # - block: features
 #   content:
 #     title: Skills
 #     items:
 #       - name: R
  #        description: 90%
 #         icon: r-project
  #        icon_pack: fab
  #      - name: Statistics
   #       description: 100%
 #         icon: chart-line
   #       icon_pack: fas
 #       - name: Photography
  #        description: 10%
 #         icon: camera-retro
  #        icon_pack: fas
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: PhD Student
          company: The Chinese University of Hong Kong
          company_url: 'https://www.cuhk.edu.hk/'
          company_logo: org-cuhk
          location: Hongkong SAR
          date_start: '2023-08-01'
          date_end: ''
          description:  |2-
              * Major: Psychology
              * Supervisor: [Prof. Helene Hoi-Lam FUNG](https://cumotivationandemotion.psy.cuhk.edu.hk/blog/), [Prof. Hanna Lu](https://thebrainx.com/)
        - title: Visiting PhD Student
          company: King's College London
          company_url: 'https://www.kcl.ac.uk'
          company_logo: org-kcl
          location: London
          date_start: '2025-08-08'
          date_end: ''
          description:  |2-
              * Major: Psychiatry
              * Supervisor: [Prof. Dag Aarsland](https://www.kcl.ac.uk/people/dag-aarsland)
        - title: Research Assistant 
          company: Shenzhen Bay Laboratory 
          company_url: 'https://www.szbl.ac.cn/'
          company_logo: org-lab
          location: Shenzhen
          date_start: '2022-05-01'
          date_end: '2023-06-01'
          description: |2-
              Responsibilities include:
              * Cognitive Assessment
              * Imaging Data Analysis
              * Biomarkers Analysis
              * Supervisor: [Prof. Tengfei Guo](http://guotf-lab.szbl.ac.cn/)
        - title: Master Student
          company: Tianjin University
          company_url: 'http://www.tju.edu.cn/'
          company_logo: org-gc
          location: Tianjin, CN
          date_start: '2019-09-01'
          date_end: '2022-01-01'
          description: |2-
              * Major: Applied Psychology
              * Supervisor: [Prof. Bin Yu](https://bin-team.netlify.app/)
        - title: Bachelor Student
          company: Jilin University
          company_url: 'https://www.jlu.edu.cn/'
          company_logo: org-x
          location: Changchun, CN
          date_start: '2014-09-01'
          date_end: '2018-07-01'
          description: |2-
              * Major: Material forming & control engineering
    design:
      columns: '2'
  - block: collection
    id: featured
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 3
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Cognitive Reserve
          tag: CR
        - name: Social Relationship
          tag: Social Relationship
        - name: Other
          tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  - block: markdown
    content:
      title: Gallery
      subtitle: ''
      text: |-
        {{< gallery album="demo" >}}
    design:
      columns: '1'


  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
 #    text: |-
 #       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, venenatis ut magna et, vehicula efficitur enim.
 #     # Contact (add or remove contact options as necessary)
      email: guolz@link.cuhk.edu.hk
#      phone: +852 55757183
   #   appointment_url: 'https://calendly.com'
      address:
        street: Shatin, NT
        city: Hong Kong
        region: 
        postcode: ' '
        country:
        country_code: 
      coordinates:
        latitude: '22.415815479596894'
        longitude: '114.20721093997439'
      directions: Sino Building, The Chinese University of Hong Kong
  #  office_hours:
 #       - 'Monday 10:00 to 13:00'
#        - 'Wednesday 09:00 to 10:00'
#      contact_links:
#        - icon: twitter
#          icon_pack: fab
#          name: DM Me
 #         link: 'https://twitter.com/Twitter'
 #       - icon: skype
  #        icon_pack: fab
  #        name: Skype Me
 #         link: 'skype:echo123?call'
   #     - icon: video
  #        icon_pack: fas
#          name: Zoom Me
   #       link: 'https://zoom.com'
   #  Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: '2'
---
