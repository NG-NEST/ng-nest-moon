import { Injectable } from '@angular/core';
import { TreeNode } from './tree.type';

@Injectable()
export class TreeService {

    nodes: TreeNode[];

    selected: TreeNode;

    constructor() { }
}


