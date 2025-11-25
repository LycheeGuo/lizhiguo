---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  # 保持紧凑的间距
  spacing: '1rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
      # 强制移除顶部多余留白
      spacing:
        padding: ['0', '0', '0', '0']

  # ↓↓↓↓↓↓ 已注释掉 My Research 板块 ↓↓↓↓↓↓
  # - block: markdown
  #   content:
  #     title: '📚 My Research'
  #     subtitle: ''
  #     text: |-
  #       My research focuses on understanding cognitive aging through the lens of cognitive reserve, social determinants, and neuroimaging biomarkers. I am particularly interested in how these factors interact to influence cognitive function and decline in older adults.
  #
  #       My work combines longitudinal data analysis, neuroimaging techniques, and epidemiological methods to investigate the mechanisms underlying cognitive resilience in aging populations. I am passionate about translating research findings into practical interventions that can improve the health and well-being of older adults.
  #
  #       Please reach out to collaborate 😃
  #   design:
  #     columns: '1'
  # ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  - block: markdown
    content:
      title: Curriculum Vitae
      subtitle: ''
      text: |-
        <iframe src="/uploads/resume.pdf" width="100%" height="800px" style="border: none;">
        </iframe>
    design:
      columns: '1'

  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2

  - block: collection
    content:
      title: Recent Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation

  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: blog
      # Choose how many pages you would like to display (0 = all pages)
      count: 3
      # Filter on criteria
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: card
      # 强制改为 2 列显示
      columns: '2'
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]

  - block: collection
    content:
      title: Projects
      subtitle: ''
      text: ''
      filters:
        folders:
          - projects
    design:
      view: card
      columns: 2
      fill_image: true

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
      subtitle: ''
      
      email: guolz@link.cuhk.edu.hk
      
      address:
        street: Shatin, NT
        city: Hong Kong
        region: ''
        postcode: ''
        country: ''
        country_code: ''
      
      coordinates:
        latitude: '22.415815479596894'
        longitude: '114.20721093997439'
      
      directions: Sino Building, The Chinese University of Hong Kong
      
      autolink: true
      
      form:
        provider: netlify
        netlify:
          captcha: false
    design:
      columns: '2'
---
