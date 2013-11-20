class RenameClientName < ActiveRecord::Migration
  def change
    rename_column :clients, :name, :subdomain
  end
end
