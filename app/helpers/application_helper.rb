module ApplicationHelper
<<<<<<< HEAD

  # ページごとの完全なタイトルを返します。
=======
    # ページごとの完全なタイトルを返します。
>>>>>>> 16f988531f3a2150200243474f6efa50ab16510d
  def full_title(page_title = '')
    base_title = "Ruby on Rails Tutorial Sample App"
    if page_title.empty?
      base_title
    else
      page_title + " | " + base_title
    end
  end
end
