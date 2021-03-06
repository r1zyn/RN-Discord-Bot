import { Collection } from "discord.js";
import { Command } from "./Command";
import { Listener } from "./Listener";
import { CategoryOptions } from "./util/Interfaces";
import { CategoryType } from "./util/Types";

export class Category {
    public content: Collection<string, Command> | Collection<string, Listener> | null;
    public id: string;
    public type: CategoryType;
    
    public constructor(id: string, options: CategoryOptions) {
        this.content = options.content;
        this.id = id;
        this.type = options.type;
    }; 
};