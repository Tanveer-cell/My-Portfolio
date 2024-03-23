import React, { useState } from 'react';
import MathJaxWrapper from '@/components/MathJaxWrapper';
import { ExpandableSection, Subsection } from '@/components/ExpandableSection';
import ScrollToTopArrow from '@/components/ScrolToTopArrow';
import Image from 'next/image';
import TransitionEffect from '@/components/TransitionEffect'

const DifferentialGeometry = () => {
    const sections = [
        {
            title: 'Doing calculus on \\( \\mathbb{R}^n \\)',
            
                    content: `
                    Elementary calculus works best for functions like \\( f : \\mathbb{R} \\to \\mathbb{R} \\), and with some tweaks we can make clculus work for functions like \\( g : \\mathbb{R}^m \\to \\mathbb{R}^n \\). Howver, in physics we need much more general functions like \\( h : U \\to V \\). Elementary calculus cannot be used in this sense, unless we have some help and that help is provided by Differentiable Manifolds.
                    <br/>
                    <br/>
                    Lets' recallthe definition of derivative from our elementary calculus 
                    \\[
                        f'(x) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}    
                    \\]

                    Some properties of real numbers that have been used in this definition are:
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2"> Cauchy Completeness </li>
                        <li class="mb-2"> \\( x_0 + h \\implies \\) addition must make sense (on domain) </li>
                        <li class="mb-2"> \\( f(x_0 + h) - f(x_0) \\implies \\) subtraction must work (on the range) </li>
                        <li class="mb-2"> \\( \\frac{f(x_0 + h) - f(x_0)}{h} \\implies \\) division must work </li>
                    </ul>

                    Now let's see what's the problem in doing calculus on \\( f : \\mathbb{R}^m \\to \\mathbb{R}^n \\)
                    \\[
                        \\lim_{\\vec{h} \\to 0} \\frac{\\vec{f}(\\vec{x_0} + \\vec{h}) - \\vec{f}(\\vec{x_0})}{\\vec{h}}    
                    \\]

                    The problem is that we cannot devide one vector with another of arbitrary dimensions.

                    <p class='text-center text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>The Differential</p>

                    Key Idea: A small enough piece of any smooth curve is like a straight line.
                    <Image
                        src="/differential_geometry/differential.png"
                        alt="differential"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2"> \\( f(x+h) = f(x) + f'(x)h + \\Delta \\) where \\( \\Delta \\) vanishes very fast as \\( h \\to 0 \\) for a smooth curve, <br/> 
                        \\[
                            \\lim_{|h| \\to 0} \\frac{|\\Delta|}{|h|} = 0
                        \\]
                        </li>
                        <li class="mb-2"> \\( f'(x)h \\) is the value of a map that takes h to \\( f'(x)h \\): a linear map ( let's call it \\( Df|_x \\) ) </li>
                    </ul>

                    <p class='text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Equivalent definition of differentiability</p>
                    A function \\( f : \\mathbb{R} \\to \\mathbb{R} \\) is differentiable at \\( x \\in \\mathbb{R} \\), if \\( \\exists \\) a linear map \\( Df|_x : \\mathbb{R} \\to \\mathbb{R} \\) such that 
                    \\[
                        \\lim_{|h| \\to 0} \\frac{| f(x+h) -f(x) - Df|_x (h) |}{|h|} = 0
                    \\] 
                    where \\( Df|_x (h) = f'(x)h \\). And we can easilty prmote this definition for a function of form \\( f: \\mathbb{R}^m \\to \\mathbb{R}^n \\).
                    <br/>
                    <br/>
                    A function \\( f: \\mathbb{R}^m \\to \\mathbb{R}^n \\) is differentiable at \\( x \\in \\mathbb{R}^m \\), if \\( \\exists \\) a linear map \\( Df|_x : \\mathbb{R}^m \\to \\mathbb{R}^n \\) such that 
                    \\[
                        \\lim_{||h|| \\to 0} \\frac{|| f(x+h) -f(x) - Df|_x (h) ||}{||h||} = 0
                    \\]

                    The linear map \\( Df|_x \\), if it exists, is the differential of \\(f\\) at \\(x\\).
                    <br/>
                    <br/>
                    For \\( f : \\mathbb{R}^n \\to \\mathbb{R} \\), \\( Df|_x \\) is a linear map from \\( \\mathbb{R}^n \\to \\mathbb{R} \\) and must be of the form: 
                    \\[
                        \\begin{align}
                        Df|_x (h) &= D_1 f|_x h^1 + D_2 f|_x h^2 + \\ldots + D_n f|_x h^n \\\\
                        &= D_i f|_x h^i
                        \\end{align}
                    \\]
                    <br/>
                    What is \\( D_i f|_x h^i \\) ? To see this, let's consider \\( h = (h^1, 0, 0, \\ldots, 0) \\). Now,
                    \\[
                        \\begin{align}
                            &\\lim_{|h| \\to 0} \\frac{| f(x+h) -f(x) - D_1f|_x h^1 |}{|h^1|} = 0\\\\
                            &\\implies D_1f|_x = \\lim_{|h^1| \\to 0} \\frac{| f(x^1+h^1, x^2, \\ldots, x^n) -f(x^1, x^2, \\ldots, x^n)|}{|h^1|}\\\\
                            &\\equiv \\text{ partial derivative of } f \\text{ wrt } x^1 \\text{ at the point } (x^1, x^2, \\ldots, x^n)
                        \\end{align}  
                    \\]
                    Thus,
                    \\[
                    df = \\left( \\frac{\\partial f}{\\partial x^1} \\right) dx^1 + \\left( \\frac{\\partial f}{\\partial x^2} \\right) dx^2 + \\ldots + \\left( \\frac{\\partial f}{\\partial x^n} \\right) dx^n = \\left( \\frac{\\partial f}{\\partial x^i} \\right) dx^i
                    \\]

                    We reserve the more common notation \\( \\frac{\\partial f}{\\partial x^i} \\big|_{(x^1, x^2, \\ldots, x^n)} \\) for a related, but slightly different purpose.
                    <br/>
                    <br/>
                    A function \\( f : \\mathbb{R}^m \\to \\mathbb{R}^n \\) can be thought of as n-tuple of n-functions \\( (f^1, f^2, \\ldots, f^n) \\) ,each of m real variables. So,
                    \\[
                        Df|_x (h) = \\begin{pmatrix} Df^1|_x (h) \\\\ Df^2|_x (h) \\\\ \\vdots \\\\ Df^n|_x (h) \\end{pmatrix} = \\begin{pmatrix} D_1 f^1|_x h^1 + D_2 f^1|_x h^2 + \\ldots + D_m f^1|_x h^m \\\\ D_1 f^2|_x h^1 + D_2 f^2|_x h^2 + \\ldots + D_m f^2|_x h^m \\\\ \\vdots \\\\ D_1 f|_x h^1 + D_2 f|_x h^2 + \\ldots + D_m f^n|_x h^m \\end{pmatrix}
                    \\]
                    Thus, \\(Df\\) can be represented by Jacobian matrix \\( Df|_x (h) = Jh \\), where 
                    \\[
                        J = \\begin{pmatrix}    
                        D_1f^1|_x & D_2f^1|_x \\ldots D_mf^1|_x \\\\
                        D_1f^2|_x & D_2f^2|_x \\ldots D_mf^2|_x \\\\
                        \\vdots \\\\
                        D_1f^n|_x & D_2f^n|_x \\ldots D_mf^n|_x \\\\
                        \\end{pmatrix}
                    \\]
                    <br/>
                    <div class='bg-slate-50/10 p-1 rounded-md'>
                    Can the definition of differentiability be extended to the case when the domain is a subset of \\( \\mathbb{R}^m \\), i.e. for \\( f : U \\subset \\mathbb{R}^m \\to \\mathbb{R}^n \\) ?
                    <br/>
                    We should be able to make sense of \\( f(x+h) \\forall x \\in U \\), atleast if \\( ||h|| \\) is small enough. So, \\(U\\) must be open set of \\( \\mathbb{R}^m \\). We can talk of differentiability on a closed set, but the problem will arise for points on the boundary.
                    </div>
                    <br/>
                    <p class='text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Manifolds: a more general setting for calculus</p>
                    Let \\( \\mathscr{M} \\) be a set. A chart \\( (U, \\phi) \\) on \\( \\mathscr{M} \\) is an ordered pair, where \\( U \\subset \\mathscr{M} \\) and \\( \\phi : U \\to \\mathbb{R}^n \\) is a 1-1 map with \\( \\phi(U) \\) an open subset of \\( \\mathbb{R}^n \\).
                    `
                },
                // Add more subsections
        {
            title: 'Charts on Manifolds',
            subsections: [
                {
                    title: 'Part 1',
                    content: `
                    <Image
                        src="/differential_geometry/2.png"
                        alt="chart"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    A chart assigns coordinates \\( (x^1, x^2, \\ldots , x^n) \\) to every point \\( p \\in U \\subset M \\). 
                    <br/>
                    <br/>
                    \\( \\phi(p) = (x^1(p), x^2(p), \\ldots , x^n(p)) : x^i : M \\to \\mathbb{R} \\) is the i-th coordinate funtion for the chart \\( (U, \\phi) \\).
                    <br/>
                    <br/>
                    Since, \\( \\phi : U \\to \\mathbb{R}^n \\) is \\( 1 - 1 \\), it is invertible, if the range is restricted to \\( \\phi(U) \\), and we denote \\( \\phi^{-1} \\), the inverse map from \\( \\phi(U) \\) to \\( M \\).
                    <br/>
                    <br/>
                    Given a function \\( f : M \\to \\mathbb{R} \\), we can seek answer to the question, "is \\(f\\) differentiable at \\(p\\)" by looking at whether \\( F = f \\hspace{1pt} o \\hspace{1pt} \\phi^{-1} : \\phi(U) \\to \\mathbb{R} \\) is differentiable .at \\( \\phi(p) \\in \\mathbb{R}^n \\). Of course this will make sense only if we take \\( p \\in U \\).
                    <Image
                        src="/differential_geometry/3.png"
                        alt="chart"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    Note - \\(M\\) is not manifold yet. Manifold is the set \\(M\\) in addition to the differential structure on it.
                    <br/>
                    <br/>
                    <p class='text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Some examples of charts</p>
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2"> 
                            \\( M = \\mathbb{R}^n, \\hspace{4pt} U = M, \\hspace{4pt} \\phi = id \\)<br/>
                            \\( \\mathbb{R}^n, id \\) is a chart on \\( \\mathbb{R}^n \\). The coordinate assigned to a point \\(p\\) here is trivially the components of \\(p\\). Two important points that tells how \\( \\mathbb{R}^n, id \\) satisfies as chart are:
                            <ul class='list-disc ml-8 my-1'>
                            <li class="mb-1"> 
                                The map \\(id\\) is \\(1 - 1\\)
                            </li>
                            <li class="mb-1"> 
                                \\( id(\\mathbb{R}^n) = \\mathbb{R}^n \\) is an open set in \\( \\mathbb{R}^n \\)
                            </li>
                        </ul>
                        </li>
                        <li class="mb-2"> 
                        \\( M = \\mathbb{R}^2, \\hspace{4pt} (U,\\phi) \\implies \\) polar coordinates on \\( \\mathbb{R}^2 \\)<br/>
                        \\[ \\phi : (x,y) \\to (r,\\theta) \\text{ , where } \\begin{cases}
                            x = r \\cos(\\theta) \\\\
                            y = r \\sin(\\theta) \\\\
                            \\end{cases} 
                        \\]
                        This function is not well defined at \\( (0,0) \\). We could try \\( U = \\mathbb{R}^2 \\hspace{2pt} \\backslash {(0,0)} \\), but then \\( \\phi(U) = (0, \\infty) \\times [0,2\\pi) \\to \\) not an open set (the points \\( (r, 0) \\) are boundary points). A possible choice is \\( U = \\mathbb{R}^2 \\hspace{2pt} \\backslash \\{(x,0) : x \\geq 0\\} \\) and in this case \\( \\phi(U) = (0,\\infty) \\times (0,2\\pi) \\to \\) open set.
                        </li>
                        <li class="mb-2"> 
                            \\( M = \\text{Mat}(2, \\mathbb{R}) \\) = the set of all \\( 2 \\times 2 \\) real matrices, \\( U = M, \\phi : U \\to \\mathbb{R}^4 \\) such that \\[ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\to (a, b, c, d) \\]
                            This map is obviously \\(1 - 1 \\) and \\( \\phi(U) = \\mathbb{R}^4 \\) is an open set.
                        </li>
                        <li class="mb-2"> 
                            \\( M = \\text{GL}(2, \\mathbb{R}) = \\{A \\in \\text{M}(2, \\mathbb{R}) : det A \\neq 0 \\} \\) \\[
                                    = \\left\\{ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} : (a, b, c, d) \\in \\mathbb{R}^4 \\hspace{2pt} \\text{ and } \\hspace{2pt} ad-bc \\neq 0 \\right\\}
                                \\]
                                \\( U = M \\text{GL}(2, \\mathbb{R}), \\phi : U \\to \\mathbb{R}^4 \\)
                                <br/>
                                <br/>
                                This is obviously \\(1-1\\) map. Now, \\( \\phi(U) = \\mathbb{R}^4 \\hspace{2pt} \\backslash \\{ (a,b,c,d) \\in \\mathbb{R}^4 : ad - bc = 0 \\} \\). Using the resuls from differential geometry of surfaces, we know that \\( \\{ (a,b,c,d) \\in \\mathbb{R}^4 : ad - bc = 0 \\} \\) is a level-set (hyper surface in \\( \\mathbb{R}^4 \\)) and if we take out a hyper surface from \\( \\mathbb{R}^4 \\), we are left with an open set.
                                <br/>
                                <br/>
                                <div class='bg-slate-50/10 p-1 rounded-md'>
                                But what if we don't know this result? How to know if \\( \\phi(U) \\) is an open set?
                                <br/>
                                <br/>
                                Let \\( x_0 \\in \\phi(U) \\). The distance of \\( x_0 \\) from \\( \\phi(U)^C = \\{ (a,b,c,d) \\subset \\mathbb{R}^4 : ad - bc = 0 \\} \\) is
                                \\[
                                    d = \\inf\\limits_{\\substack{x \\hspace{1pt} \\in \\hspace{1pt} \\phi(U)} } f(x)
                                \\]
                                where \\( d(x, x_0) \\to \\) euclidean distance between \\(x\\) amd \\(x_0\\) and inf \\(\\to\\) infimum of these bunch of distances as \\(x\\) ranges over the set.
                                <br/>
                                <br/>
                                It is intuitively obvious that \\( d > 0 \\). Then, \\( B_{x_0}(d) \\cap \\phi(U)^C = \\{\\} \\), where \\( B_{x_0}(d) \\) is a ball of radius \\(d\\) surrounding \\(x_0\\), which implies \\( B_{x_0}(d) \\subset \\phi(U) \\). So, \\( \\phi(U) \\) is open set.
                                </div>
                                <br/>
                                <div class='bg-slate-50/10 p-1 rounded-md'>
                                Is \\(d\\) really \\( > 0\\)?
                                <br/>
                                <br/>
                                Let's try to minimize \\( (x^1 - x^1_0)^2 + (x^2 - x^2_0)^2 + (x^3 - x^3_0)^2 + (x^4 - x^4_0)^2 \\) subject to \\( x^1x^4 - x^2x^3 = 0 \\). Use Lagrange multiplier:
                                \\[
                                    (x^1 - x^1_0)dx^1 + (x^2 - x^2_0)dx^2 + (x^3 - x^3_0)dx^3 + (x^4 - x^4_0)dx^4 + \\lambda (x^4dx^1 - x^3 dx^2 - x^2 dx^3 + x^1 dx^4) = 0
                                \\]
                                <br/>
                                This gives us four sets of equations, which are:
                                \\[
                                    \\begin{align}
                                        x^1 + \\lambda x^4 &= x^1_0\\\\
                                        x^2 - \\lambda x^3 &= x^2_0\\\\
                                        x^3 - \\lambda x^2 &= x^3_0\\\\
                                        x^4 + \\lambda x^1 &= x^4_0\\\\
                                    \\end{align}
                                \\]
                                Now,
                                \\[
                                    \\begin{align}
                                \\begin{pmatrix}
                                x^1 \\\\ x^4
                                \\end{pmatrix} &= \\begin{pmatrix}
                                1 & \\lambda \\\\ \\lambda & 1
                                \\end{pmatrix}^{-1} \\begin{pmatrix}
                                x^1_0 \\\\ x^4_0
                                \\end{pmatrix} = (1 - \\lambda^2)^{-1} \\begin{pmatrix}
                                x^1_0 - \\lambda x^4_0 \\\\ -\\lambda x^1_0 + x^4_0
                                \\end{pmatrix} \\\\
                                \\begin{pmatrix}
                                x^2 \\\\ x^3
                                \\end{pmatrix} &= \\begin{pmatrix}
                                1 & \\lambda \\\\ \\lambda & 1
                                \\end{pmatrix}^{-1} \\begin{pmatrix}
                                x^2_0 \\\\ x^3_0
                                \\end{pmatrix} = (1 - \\lambda^2)^{-1} \\begin{pmatrix}
                                x^2_0 - \\lambda x^3_0 \\\\ -\\lambda x^2_0 + x^3_0
                                \\end{pmatrix}
                                \\end{align}
                                \\]
                                Now applying the constraint, i.e. \\( x^1x^4 = x^2x^3 \\) we get
                                \\[
                                    \\begin{align}    
                                        &\\implies (x^1_0 - \\lambda x^4_0)(-\\lambda x^1_0 + x^4_0) = (x^2_0 + \\lambda x^3_0)(\\lambda x^2_0 + x^3_0) \\\\
                                        &\\implies \\lambda^2 - \\lambda \\frac{(x^1_0)^2 + (x^2_0)^2 + (x^3_0)^2 + (x^4_0)^2}{x^1_0 x^4_0 - x^2_0 x^3_0} + 1 = 0 \\\\
                                        &\\implies \\lambda \\neq 0
                                    \\end{align}
                                \\]
                                Discriminant \\( \\geq 0 \\)
                                \\[
                                    \\begin{align}
                                        &\\implies (x^1_0)^2 + (x^2_0)^2 + (x^3_0)^2 + (x^4_0)^2 \\geq 2[x^1_0 x^4_0 - x^2_0 x^3_0] \\\\
                                        &\\implies (x^1_0 \\pm x^4_0)^2 + (x^2_0 \\mp x^3_0)^2 \\geq 0
                                    \\end{align}
                                \\]
                                \\( \\lambda \\) has real roots! For every \\( x_0 \\) we can find a point \\( x \\neq x_0 \\) which is at a minimum distance from it.
                                </div>
                        </li>
                    </ul>
                    `,
                },
                {
                    title: 'Part 2',
                    content: `
                    We will go on to see issues that arise when one chart cannot cover the entire set and we will need to talk about compatibility between charts. But first let's see a couple of examples:
                    <p class='text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>The Sphere \\( S^n \\) </p>
                    \\[ S^n = \\{ (a_1, a_2, \\ldots, a_{n+1}) \\in \\mathbb{R}^{n+1} : \\sum\\limits_{i=1}^{n+1} (a_i)^2 = 1 \\} \\]
                    So, \\(S^2\\), which is a 2-dimensional sphere, sits in \\( \\mathbb{R}^3 \\). It turns out that sphere happens to be one of those sets where we cannot have a chart which covers the entire set. One possibility of a chart would be following:<br/>
                    Take a point on north pole say \\( NP = (0,0, \\ldots , 0) \\in S^n \\), \\( U = S^n \\backslash \\{NP\\} \\) and \\( \\phi : \\to \\) stereographic projection from the north pole
                    <Image
                        src="/differential_geometry/4.png"
                        alt="chart"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    From the figure we can easily see that \\( (b_1, b_2, \\ldots , b_n, 0) - (0,0, \\ldots , 0, 1) = \\lambda [(a_1, a_2, \\ldots, a_{n+1}) - (0,0, \\ldots , 0)]) \\).<br/><br/>
                    For \\( i = 1, \\ldots, n \\) we have \\( b_i = \\lambda a_i \\). Also we get that
                    \\[
                        0-1 = \\lambda (a_{n+1} - 1)    
                    \\]
                    \\[
                        \\implies b_i = \\frac{a_i}{1 - a_{n+1}}    
                    \\]
                    \\[ U = S^n \\backslash \\{NP\\} \\hspace{7pt}  , \\hspace{7pt} \\phi : U \\to \\mathbb{R}^n \\hspace{7pt} \\text{ and } \\hspace{7pt} \\phi(U) = \\mathbb{R}^n \\]
                    So,
                    \\[
                        \\phi : (a_1, a_2, \\ldots, a_{n+1}) \\in S^n \\to \\frac{1}{1 - a^{n+1}} (a_1, a_2, \\ldots , a_n) \\in \\mathbb{R}^n
                    \\]
                    <div class='bg-slate-50/10 p-1 rounded-md mb-2'>
                    What about \\( \\phi^{-1} \\)? (\\( \\phi \\) is a one-to-one and onto)
                    \\[
                        \\sum\\limits_{i=1}^{n} (b_i)^2 = \\sum\\limits_{i=1}^n \\frac{(a_i)^2}{(1-a_{n+1})^2} = \\frac{\\sum\\limits_{i=1}^n (a_i)^2}{(1-a_{n+1})^2} = \\frac{1 - (a_{n+1})^2}{(1 - a_{n+1})^2} = \\frac{1+a_{n+1}}{1-a_{n+1}}
                    \\]
                    \\[
                        \\begin{align}
                            1 + \\sum\\limits_{i=1}^n (b_i)^2 &= \\frac{2}{1 - a_{n+1}} \\\\
                            a_{n+1} &= \\frac{\\sum\\limits_{i=1}^n (b_i)^2 - 1}{\\sum\\limits_{i=1}^n (b_i)^2 + 1}
                        \\end{align}
                    \\]
                    \\[
                        \\text{Thus, } \\hspace{7pt} \\phi^{-1} : (b_1, b_2, \\ldots, b_n) \\to \\frac{1}{1 + \\sum\\limits_{i=1}^n (b_i)^2} (2b_1, 2b_2, \\ldots, 2b_n, \\sum\\limits_{i=1}^n (b_i)^2 - 1)
                    \\]
                    </div>
                    But this does not cover all of the sphere!
                    <br/>
                    <br/>
                    Remedy : Use another chart \\( (V, \\chi) \\). This time we project from south pole, i.e \\( SP = (0,0, \\ldots, 0, -1) \\). Thus, \\( V = S^n \\backslash \\{SP\\} \\). Hence, \\( \\chi : (a_1, a_2, \\ldots , a_{n+1}) \\in S^n \\to \\frac{1}{1 + a_{n+1}} (a_1, \\ldots , a_n) \\in \\mathbb{R}^n \\), which then gives \\( \\chi(V) = \\mathbb{R}^n \\).
                    \\[
                        \\chi^{-1} : (c_1, c_2, \\ldots , c_n) \\to \\frac{1}{1 + \\sum\\limits_{i=1}^n  (c_i)^2} \\left( 2c_1, 2c_2, \\ldots , 1 - \\sum\\limits_{i=1}^n  (c_i)^2 \\right)
                    \\]
                    \\(U\\) and \\(V\\) together cover all of \\(S^n\\).
                    \\[
                        U \\cup V = S^n
                    \\]
                    Having enough chart to cover the entire set is very very important in setting up the differential structure on any set, however we have to also consider about compatibility conditions.
                    <br/>
                    <br/>
                    Let's look at one more example
                    <p class='text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>\\( M = \\text{SL}(2, \\mathbb{R}) = \\{A \\in \\text{GL}(2, \\mathbb{R}) : det A = 1 \\} = \\left\\{ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}  : ad - bc = 1 \\right\\} \\) </p>
                    What can be a valid chart?
                    <br/>
                    <br/>
                    \\(1^{\\text{st}}\\) attempt: \\( U = M , \\hspace{5pt} \\phi : \\text{SL}(2, \\mathbb{R}) \\to \\mathbb{R}^4 \\) such that \\( \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\to (a,b,c,d) \\). This is obviously 1-1, but \\( \\phi(U) = \\{ (a,b,c,d) \\in \\mathbb{R}^4 : ad - bc = 1 \\} \\) is not an open set. To show that, let's consider an arbitrary point \\( x = (a,b,c,d) \\in \\phi(U) \\). Consider \\( B_x(r) \\) for some \\( r > 0 \\). If \\( 0 < \\bar{r} < r \\), then \\( \\bar{x} = (a+\\bar{r}, b, c, d) \\in B_x(r) \\) and \\( (a+\\bar{r})d - bc = 1 = 1 + \\bar{r}d \\neq 1 \\) (unless \\(d=0\\)). This implies \\( \\bar{x} \\notin \\phi(U) \\implies B_x(r) \\nsubseteq \\phi(U) \\) for any \\( r > 0 \\). Hence, \\( \\phi(U) \\) is not open.
                    <br/>
                    <br/>
                    \\( 2^{\\text{nd}} \\) attempt : \\( U = \\text{SL}(2, \\mathbb{R}) \\), \\( \\hspace{7pt} \\phi : \\text{SL}(2, \\mathbb{R}) \\to \\mathbb{R}^3 \\) such that \\( \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\to (a, b, c) \\), as \\(d\\) can be determined through \\(ad-bc = 1\\). \\( \\phi(U) = \\mathbb{R}^3 \\) is open. But \\( \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\) and \\( \\begin{pmatrix} a & b \\\\ c & \\bar{d} \\end{pmatrix} \\) both map to \\( (a,b,c) \\), and they are both in \\(\\text{SL}(2,\\mathbb{R})\\), if \\(ad-bc=1= a \\bar{d} - bc \\implies a(d-\\bar{d}) = 0 \\) and if \\(a=0\\), then \\( d \\) and \\( \\bar{d} \\) can be different.
                    <br/>
                    <br/>
                    \\( \\begin{pmatrix} a & b \\\\ -b^{-1} & d \\end{pmatrix} \\in \\text{SL}(2, \\mathbb{R}) \\) and will map to \\( (0,b,-b^{-1}) \\) for any \\(d\\). Ths, \\( \\phi \\) is not 1-1. Hence what we can do is following:
                    <br/>
                    <br/>
                    \\[ U = \\text{SL}(2, \\mathbb{R}) \\big\\backslash \\left\\{ A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\in \\text{SL}(2, \\mathbb{R}) : a = 0 \\right\\} \\hspace{7pt} \\text{ and } \\hspace{7pt} \\phi : U \\to \\mathbb{R}^3 \\hspace{7pt} \\text{ thus } \\hspace{7pt} \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\to (a,b,c) \\]
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2"> \\( \\phi(U) = \\mathbb{R}^3 \\backslash \\{ (0,b,c) :b,c \\in \\mathbb{R} \\} \\) is an open set. \\( \\phi(U) \\) is a 3D space from which \\( x=0 \\) plane has been deleted.
                        </li>
                        <li class="mb-2"> \\( ad-bc=1 \\implies d = \\frac{1+bc}{a} \\) (valid, since \\( a \\neq 0 \\)). \\( (a,b,c) \\) can only be the image of \\( \\begin{pmatrix} a & b \\\\ c & \\frac{1+bc}{a} \\end{pmatrix} \\)
                        </li>
                    </ul>
                    \\( \\phi \\) is a 1-1 map. Hence, this is a valid chart.
                    <br/>
                    <br/>
                    However this does not cover all of \\(\\text{SL}(2,\\mathbb{R})\\). So, we need to consider another chart which is as following:
                    \\[ V = \\text{SL}(2, \\mathbb{R}) \\big\\backslash \\left\\{ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\in \\text{SL}(2, \\mathbb{R}) : b = 0 \\right\\} \\hspace{7pt} \\text{ and } \\hspace{7pt} \\chi : V \\to \\mathbb{R}^3 \\hspace{7pt} \\text{ thus } \\hspace{7pt} \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\to (a,b,d) \\]
                    And \\( (V, \\chi) \\) is a valid chart.
                    <br/>
                    <br/>
                    For \\( \\text{SL}(2, \\mathbb{R}) \\) we have found two charts \\( (U, \\phi) \\) and \\( (V, \\chi) \\). Since, \\( U \\cup V = \\text{SL}(2, \\mathbb{R}) \\), together the two charts cover all of SL\\( (2, \\mathbb{R}) \\).
                    <br/>
                    <br/>
                    <p class='text-lg text underline underline-offset-8 inline-block mt-5 mb-2 font-semibold text-blue-500'>Reminder </p> : A function  \\( f : M \\to \\mathbb{R} \\) is called differentiable of class \\( c^k \\) at \\( p \\in M \\), when given a chart \\( (U, \\phi) \\) of \\(M\\) with \\( p \\in U \\), the function \\( f \\hspace{2pt} o \\hspace{2pt} \\phi^{-1} : \\phi(U) \\subset \\mathbb{R}^n \\to \\mathbb{R} \\) is differentiable of class \\( c^k \\).
                    <br/>
                    <br/>
                    We can answer questions on differentiability of \\( f : \\text{SL}(2, \\mathbb{R}) \\to \\mathbb{R} \\) using either \\( f \\hspace{2pt} o \\hspace{2pt} \\phi^{-1} \\) or \\( f \\hspace{2pt} o \\hspace{2pt} \\chi^{-1} \\), at least in the part \\( U \\cap V \\). The same goes for the two different charts on \\( S^n \\) provided by the two different stereographic projections.
                    <br/>
                    <br/>
                    <div class='bg-slate-50/10 p-1 rounded-md'>
                    How can we be sure that the two (or more) charts used will not give us different answers?
                    <p class='text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'> Compatibility </p>
                    \\[
                        \\begin{align}    
                            &\\text{On } \\phi(U \\cap V) : f \\hspace{2pt} o \\hspace{2pt} \\phi^{-1} = (f \\hspace{2pt} o \\hspace{2pt} \\chi^{-1}) \\hspace{2pt} o \\hspace{2pt} (\\chi \\hspace{2pt} o \\hspace{2pt} \\phi^{-1})\\\\
                            &\\text{On } \\chi(U \\cap V) : f \\hspace{2pt} o \\hspace{2pt} \\chi^{-1} = (f \\hspace{2pt} o \\hspace{2pt} \\phi^{-1}) \\hspace{2pt} o \\hspace{2pt} (\\phi \\hspace{2pt} o \\hspace{2pt} \\chi^{-1})\\\\
                        \\end{align}    
                    \\]
                    The functions \\( \\chi \\hspace{2pt} o \\hspace{2pt} \\phi^{-1} : \\phi(U \\cap V) \\to \\chi(U \\cap V) \\) and \\( \\phi \\hspace{2pt} o \\hspace{2pt} \\chi^{-1} : \\chi(U \\cap V) \\to \\phi(U \\cap V) \\) hold the key to compatibility.
                    </div>
                    `,
                },
                // Add more subsections
            ],
        },
        // Add more sections
    ];

    const [openSection, setOpenSection] = useState(null);
    const [openSubsection, setOpenSubsection] = useState(null);

    const toggleSection = (sectionIndex) => {
        if (sectionIndex === openSection) {
            setOpenSection(null);
        } else {
            setOpenSection(sectionIndex);
            setOpenSubsection(null);
        }
    };

    const toggleSubsection = (subsectionIndex) => {
        if (subsectionIndex === openSubsection) {
            setOpenSubsection(null);
        } else {
            setOpenSubsection(subsectionIndex);
        }
    };

    const processContent = (content) => <MathJaxWrapper content={content} />;

    return (
        <div>
            <TransitionEffect/>
            <div className="relative h-full">
                <div className="h-full translate-y-16 overflow-y-auto scroll-smooth overflow-visible overscroll-y-auto pb-24 pt-4">
                    <div className="max-w-7xl mx-auto mb-20 p-4 shadow-2xl rounded-lg prose dark:prose-invert">
                        <h1 className="text-3xl font-semibold text-center font-mono justify-center text-accent mb-4">
                            {processContent('Differential Geometry')}
                        </h1>
                        {sections.map((section, index) => (
                            <ExpandableSection
                                key={index}
                                title={processContent(`${index + 1}. ${section.title}`)}
                                isOpen={openSection === index}
                                toggle={() => toggleSection(index)}
                                hasSubsections={section.subsections && section.subsections.length > 0}
                            >
                                {section.subsections && section.subsections.length > 0 && (
                                    <>
                                        {section.subsections.map((subsection, subIndex) => (
                                            <Subsection
                                                key={subIndex}
                                                title={processContent(`${index + 1}.${subIndex + 1} ${subsection.title}`)}
                                                isOpen={openSubsection === subIndex && openSection === index}
                                                toggle={() => toggleSubsection(subIndex)}
                                            >
                                                {processContent(subsection.content)}
                                            </Subsection>
                                        ))}
                                    </>
                                )}
                                {section.content && processContent(section.content)}
                            </ExpandableSection>
                        ))}
                    </div>
                </div>
            </div>
            <ScrollToTopArrow/>
        </div>
    );
};


export default DifferentialGeometry;