module.exports.GITHUB_TOKEN = "{{ githubwebhooks_github_token }}"
module.exports.GITHUB_ORG = "{{ githubwebhooks_github_organization }}"
module.exports.WEB_HOOK = "{{ githubwebhooks_web_hook }}"
module.exports.GITHUB_EVENTS = {% for event in githubwebhooks_github_events %}["{{ event }}"{% if not loop.last %},{% endif %}]{% endfor %}

module.exports.GITHUB_REPO_FILTER = process.argv[2]
